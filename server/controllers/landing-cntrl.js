const bcryptjs = require("bcryptjs");

const { ddu_id_formate_check } = require("../src/helpers/student-helper");
const StudentCollection = require("../src/models/student-schema");
const LoginStdCollection = require("../src/models/login-std-schema");

require("../src/helpers/student-helper");

exports.landing_page = async (req, res) => {
    try {
        res.status(201).send(
            `<a href="/login">Login</a>` + `<br><br>` +
            `<a href="/auth">Login With Google</a>`
        );

    } catch (error) {
        console.log(error);
    }
};

exports.login_student = async (req, res) => {
    try {

        let ddu_id = (req.body.ddu_id).toUpperCase();
        let isValid = ddu_id_formate_check(ddu_id);

        if (isValid) {

            let isExist = await StudentCollection.findOne({ ddu_id: ddu_id });

            if (isExist === null) {

                await LoginStdCollection.insertMany([{
                    ddu_id: ddu_id,
                    ddu_email_id: ddu_id.toLowerCase() + "@ddu.ac.in",
                    password: bcryptjs.hashSync(req.body.password),
                    by_google: false
                }]);

                await StudentCollection.insertMany([{
                    ddu_id: ddu_id
                }]);

                return res.status(201).send(req.body);
            }

            console.log("landing : already logged-in...");
            return res.status(201).send(req.body);
        }

        console.log('invalid ddu - email - id...');
        return res.status(301).redirect("/");

    } catch (error) {
        console.log(error);
    }
}