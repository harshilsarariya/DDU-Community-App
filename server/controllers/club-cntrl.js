const ClubCollection = require("../src/models/club-schema");
const StudentCollection = require("../src/models/student-schema");



module.exports = {

    createClub: async (req, res) => {

        try {

            const student = await StudentCollection.findOne({ ddu_id: req.body.creator_id });

            const club = await ClubCollection.insertMany([{
                club_name: req.body.club_name,
                club_creator: student._id,
                no_of_members: 1,
                admin_list: [{
                    admin_id: student._id
                }],
                member_list: [{
                    member_id: student._id
                }]
            }]);

            student.club_list.push({ club_id: club[0]._id });
            await StudentCollection.updateOne(
                { ddu_id: req.body.creator_id },
                {
                    $set: { club_list: student.club_list }
                }
            );

            console.log("club created successfully...");
            res.status(201).send(req.body);

        } catch (error) {
            console.log(error);
        }
    },

    getClub: async (req, res) => {
        console.log(req.body.club_id);
        let club = await ClubCollection.findOne({ _id: req.body.club_id });
        res.status(201).send(club);
    },

    updateClub: async (req, res) => {

        let update_data = new Object();
        update_data.club_name = req.body.club_name;
        update_data.image = new Object();

        if (req.body.club_creator) update_data.club_creator = req.body.club_creator;
        if (req.body.description) update_data.description = req.body.description;
        if (req.body.cover_img) update_data.image.cover_img = req.body.cover_img;
        if (req.body.profile_img) update_data.image.profile_img = req.body.profile_img;


        let result = await ClubCollection.updateOne(
            { _id: req.body._id },
            { $set: update_data }
        );

        return res.status(201).send(result);
    },

    deleteClub: async (req, res) => {
        try {

            let result = await ClubCollection.deleteOne({ _id: req.body.club_id });
            res.status(201).send(result);

        } catch (error) {
            console.log(error);
        }
    },

    createMember: async (req, res) => {
        try {

            let club = await ClubCollection.findOne({ _id: req.body.club_id });
            let student = await StudentCollection.findOne({ ddu_id: req.body.new_member_id || req.body.new_admin_id });

            //add.. in club


            if (req.body.new_admin_id) {

                club.admin_list.push({ admin_id: student._id });
                await ClubCollection.updateOne(
                    { _id: club._id },
                    {
                        $set: {
                            admin_list: club.admin_list,
                            member_list: club.member_list,
                            no_of_members: (club.no_of_members + 1)
                        }
                    }
                );

                let isExistAsAMember = false;
                let members = club.member_list;
                for (i = 0; i < members.length; i++) {

                    if (members[i].member_id.toString() === student._id.toString()) {
                        isExistAsAMember = true;
                        break;
                    }
                }

                if (!isExistAsAMember) {
                    club.member_list.push({ member_id: student._id });
                    await ClubCollection.updateOne(
                        { _id: club._id },
                        {
                            $set: {
                                member_list: club.member_list,
                                no_of_members: (club.no_of_members + 1)
                            }
                        }
                    );
                }
            }
            else {

                club.member_list.push({ member_id: student._id });
                await ClubCollection.updateOne(
                    { _id: club._id },
                    {
                        $set: {
                            member_list: club.member_list,
                            no_of_members: (club.no_of_members + 1)
                        }
                    }
                );
            }

            student.club_list.push({ club_id: req.body.club_id });

            await StudentCollection.updateOne(
                { ddu_id: req.body.new_member_id || req.body.new_admin_id },
                { $set: { club_list: student.club_list } }
            );

            res.status(201).end("member successfully added...");

        } catch (error) {
            console.log(error);
        }
    },

    deleteMember: async (req, res) => {

        let student = await StudentCollection.findOne({ _id: req.body.member_id || req.body.admin_id });
        let club = await ClubCollection.findOne({ _id: req.body.club_id });

        let members = club.member_list;
        for (i = 0; i < members.length; i++) {

            if (members[i].member_id.toString() === student._id.toString()) {
                members.splice(i, 1);
                break;
            }
        }

        let clubs = student.club_list;
        for (i = 0; i < clubs.length; i++) {

            if (clubs[i].club_id.toString() === club._id.toString()) {
                clubs.splice(i, 1);
                break;
            }
        }

        let admins = club.admin_list;
        for (i = 0; i < admins.length; i++) {
            if (admins[i].admin_id.toString() === student._id.toString()) {
                admins.splice(i, 1);
                break;
            }
        }

        await ClubCollection.updateOne(
            { _id: club._id },
            {
                $set: {
                    admin_list: admins,
                    member_list: members,
                    no_of_members: (club.no_of_members - 1)
                }
            }
        )

        await StudentCollection.updateOne(
            { _id: student._id },
            { $set: { club_list: clubs } }
        );

        res.status(201).send("delted succesuufully...");
    },

    createAnnouncement: async (req, res) => {
        try {
            //check admin is exist or not ?
            let club = await ClubCollection.findOne({ _id: req.body.club_id });
            let admins = club.admin_list;

            let isAdmin = false;
            for (i = 0; i < admins.length; i++) {
                if (admins[i].admin_id.toString() === req.body.admin_id) {
                    isAdmin = true;
                    break;
                }
            }
            if (!isAdmin) return res.status(201).send("he/she is not a admin of this club : " + club.club_name);


            let announcements = club.announcements_list;
            announcements.push({
                admin_id: req.body.admin_id,
                post: {
                    post_img: req.body.post_img,
                    post_text: req.body.post_text
                }
            });

            await ClubCollection.updateOne(
                { _id: req.body.club_id },
                {
                    $set: { announcements_list: announcements }
                }
            );

            res.status(201).send("announcement is done:)...");


        } catch (error) {
            console.log(error);
        }
    },

    getAnnouncement: async (req, res) => {
        try {
            let club = await ClubCollection.findOne({ _id: req.body.club_id });
            let announcements = club.announcements_list;

            return res.status(201).send(announcements);

        } catch (error) {
            console.log(error);
        }
    },

    deleteAnnouncement: async (req, res) => {
        try {
            let club = await ClubCollection.findOne({ _id: req.body.club_id });
            let announcements = club.announcements_list;

            for (i = 0; i < announcements.length; i++) {
                if (announcements[i]._id.toString() === req.body.announcement_id) {
                    announcements.splice(i, 1);
                    break;
                }
            }

            await ClubCollection.updateOne(
                { _id: req.body.club_id },
                { $set: { announcements_list: announcements } }
            );

            res.status(201).send("annoncement removed successfully...");

        } catch (error) {
            console.log(error);
        }
    }

};
