const express = require('express');
const router = express.Router();

const { getStudent, updateStudent } = require("../../controllers/student-cntrl");


router.post("/get-student", getStudent);
router.put("/update-student", updateStudent);

module.exports = router;