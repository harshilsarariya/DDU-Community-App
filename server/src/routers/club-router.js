const express = require('express');
const router = express.Router();

// controllers
const {
    createClub,
    getClub,
    updateClub,
    deleteClub,
    createMember,
    deleteMember,
    createAnnouncement,
    getAnnouncement,
    deleteAnnouncement

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
router.delete("/club/remove-member", deleteMember);
router.post("/club/add-admin", authStudent, createMember);
router.delete("/club/remove-admin", deleteMember);

router.post("/club/add-announcement", createAnnouncement);
router.post("/club/get-announcement", getAnnouncement);
router.delete("/club/delete-announcement", deleteAnnouncement);



module.exports = router;