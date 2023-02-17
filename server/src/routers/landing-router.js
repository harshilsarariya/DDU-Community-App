const express = require('express');
const router = express.Router();

const {
    landing_page,
    login_student
} = require("../../controllers/landing-cntrl");


router.get("/", landing_page);
router.post("/login", login_student);

module.exports = router;