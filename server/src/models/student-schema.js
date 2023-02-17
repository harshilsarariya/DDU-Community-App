const mongoose = require("mongoose");

//students
const StudentSchema = new mongoose.Schema({

    ddu_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    semester: {
        type: Number,
        min: 1,
        max: 8
    },
    image: {
        cover_img: {
            type: String
        },
        profile_img: {
            type: String
        }
    },
    description: {
        type: String
    },
    social_media: {
        linked_in: {
            type: String
        },
        github: {
            type: String
        },
        twitter: {
            type: String
        },
        instagram: {
            type: String
        },
    },
    club_list: [{
        club_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "club"
        }
    }],
    group_list: [{
        group_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "group"
        }
    }],
    resource_list: [{
        resource_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "resource"
        }
    }],
    is_login: {
        type: Boolean
    }

}, {
    timestamps: true
}
);

const StudentCollection = mongoose.model("student", StudentSchema);
module.exports = StudentCollection;