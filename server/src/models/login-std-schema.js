const mongoose = require('mongoose');

const LoginStudentSchema = new mongoose.Schema({

    ddu_id: {
        type: String,
        required: true,
        unique: true
    },
    ddu_email_id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    by_google: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

const LoginStdCollection = mongoose.model("login_students", LoginStudentSchema);
module.exports = LoginStdCollection;