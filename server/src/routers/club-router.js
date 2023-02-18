const express = require('express');
const router = express.Router();

// controllers
const {
    createClub,
    getClub,
    updateClub,
    deleteClub,
    createMember,
    getMembers,
    getAdmins,
    deleteMember,
    createAnnouncement,
    getAnnouncement,
    deleteAnnouncement,
    memberToadmin,
    getClubCreator,
    changeClubCreator

} = require("../../controllers/club-cntrl");

//middlewares
const {
    authStudent,
    rmvClub
} = require("../middlewares/club-middleware");


//routers
router.post("/create-club", createClub);
router.post("/get-club", getClub);
router.put("/update-club", updateClub);
router.delete("/delete-club", rmvClub, deleteClub);

router.post("/club/add-member", authStudent, createMember);
router.post("/club/get-members", getMembers);
router.delete("/club/remove-member", deleteMember);

router.post("/club/add-admin", authStudent, createMember);
router.post("/club/get-admins", getAdmins);
router.delete("/club/remove-admin", deleteMember);

router.post("/club/add-announcement", createAnnouncement);
router.post("/club/get-announcement", getAnnouncement);
router.delete("/club/delete-announcement", deleteAnnouncement);

router.post("/club/get-club-creator", getClubCreator);
router.put("/club/update-club-creator", changeClubCreator);

router.post("/club/member-to-admin", memberToadmin);

module.exports = router;