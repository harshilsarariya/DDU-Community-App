const mongoose = require("mongoose");

//gallery (cascade delete & update)
const GallerySchema = new mongoose.Schema({

    //f.k. & p.k.
    ddu_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
    },
    post: [{
        upload_img: {},
        description: {
            type: String
        }
    }]
});

const GalleryCollection = mongoose.model("gallery", GallerySchema);
module.exports = GalleryCollection;
