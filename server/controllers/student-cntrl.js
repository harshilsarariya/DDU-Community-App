const StudentCollection = require("../src/models/student-schema");
const LoginCollection = require("../src/models/login-std-schema");

module.exports = {
    getStudent: async (req, res) => {
        try {
            let student = await StudentCollection.findOne({ ddu_id: req.body.ddu_id });

            if (student) {
                return res.status(201).send(student);
            }

            return res.status(503).end("student doesn't exist");

        } catch (error) {
            console.log(error);
        }
    },

    updateStudent: async (req, res) => {

        try {
            let update_data = new Object();
            update_data.social_media = new Object();
            update_data.image = new Object();

            update_data.ddu_id = req.body.ddu_id;

            if (req.body.name) update_data.name = req.body.name;
            if (req.body.semester) update_data.semester = req.body.semester;
            if (req.body.profile_img) update_data.image.profile_img = req.body.profile_img;
            if (req.body.cover_img) update_data.image.cover_img = req.body.cover_img;
            if (req.body.description) update_data.description = req.body.description;
            if (req.body.linked_in) update_data.social_media.linked_in = req.body.linked_in;
            if (req.body.github) update_data.social_media.github = req.body.github;
            if (req.body.twitter) update_data.social_media.twitter = req.body.twitter;
            if (req.body.instagram) update_data.social_media.instagram = req.body.instagram;
            if (req.body.club_list) update_data.club_list = req.body.club_list;
            if (req.body.group_list) update_data.group_list = req.body.group_list;
            if (req.body.resource_list) update_data.resource_list = req.body.resource_list;

            await StudentCollection.updateOne(
                { ddu_id: req.body.ddu_id },
                { $set: update_data }
            );

            res.status(201).end("stduent gets update successfully...");

        } catch (error) {
            console.log(error);
        }
    }
}