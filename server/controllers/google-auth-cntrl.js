const { ddu_id_formate_check } = require("../src/helpers/student-helper");
const StudentCollection = require("../src/models/student-schema");
const LoginStdCollection = require("../src/models/login-std-schema");

require("../src/db/connection");
require("../src/helpers/student-helper");

exports.google_success_auth = async (req, res) => {
    try {
        if (!req.user) //req.user==null
            res.redirect('/auth/callback/failure');

        //db-entry
        let ddu_id = (req.user.email).substr(0, 10).toUpperCase();
        let isValid = ddu_id_formate_check(ddu_id);

        if (isValid) {

            let isExist = await StudentCollection.findOne({ ddu_id: ddu_id });
            if (isExist === null) {

                await LoginStdCollection.insertMany([{
                    ddu_id: ddu_id,
                    ddu_email_id: req.user.email,
                    by_google: true
                }]);

                await StudentCollection.insertMany([{
                    ddu_id: ddu_id
                }]);

                return res.status(201).send(req.user);
            }

            console.log('google-auth : already logged in...');
            return res.status(301).redirect("/");
        }

        console.log('invalid ddu - email - id...');
        return res.status(301).redirect("/");

    } catch (error) {
        console.log(error);
    }

};

exports.google_fail_auth = (req, res) => {
    res.status(401).send("google-auth-error");
};