const mongoose = require("mongoose");

//clubs
const ClubSchema = new mongoose.Schema({

    club_name: {
        type: String,
        unique: true,
        required: true
    },
    club_creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    },
    admin_list: [{
        admin_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student"
        }
    }],
    member_list: [{
        member_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student"
        }
    }],
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
    no_of_members: {
        type: Number,
        default: 0,
        min: 1
    },
    announcements_list: [{
        admin_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student"
        },
        post: {
            post_img: {
                type: String
            },
            post_text: {
                type: String,
                required: true
            }
        },
        creatAt: {
            type: Date,
            default: new Date()
        }
    }],
    community_name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "community"
    }

}, {
    timestamps: true
}
);

const ClubCollection = mongoose.model("club", ClubSchema);
module.exports = ClubCollection;