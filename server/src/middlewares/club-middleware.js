const ClubCollection = require("../models/club-schema");
const StudentCollection = require("../models/student-schema");

const { rmvClub } = require("../helpers/student-helper");

module.exports = {

    authStudent: async (req, res, next) => {

        let club = await ClubCollection.findOne({ _id: req.body.club_id });
        let student = await StudentCollection.findOne({ ddu_id: req.body.new_member_id || req.body.new_admin_id });

        //check new-member is exist on application .
        if (student === null) {
            return res.status(503).send("student doesn't registered... on application");
        }

        // check new-member is already exist ?
        let members = club.member_list;

        for (i = 0; i < members.length; i++) {
            if (members[i].member_id.toString() === student._id.toString()) {
                return res.status(301).send("already registered member on group : " + club.club_name);
            }
        }
        next();
    },

    rmvClub: async (req, res, next) => {
        try {

            //for student
            let result = await ClubCollection.findOne({ _id: req.body.club_id }).select({ _id: 0, member_list: 1 });

            let students = new Array();

            result.member_list.forEach((ele, indx) => {
                students.push(ele.member_id.toString());
            });

            for (i = 0; i < students.length; i++) {
                let result = await StudentCollection.findOne({ _id: students[i] }).select({ _id: 0, club_list: 1 });

                clubList = rmvClub(result.club_list, req.body.club_id);
                console.log(clubList);

                let updateResult = await StudentCollection.updateOne(
                    { _id: students[i] },
                    { $set: { club_list: clubList } }
                );
            }
            next();

        } catch (error) {
            console.log(error);
        }
    }
}