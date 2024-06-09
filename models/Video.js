const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const VideoSchema = new Schema({
    title: {
        type: String,
    },

    uploadDate: { type: Date },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: "Subject",
    },
}, { timestamps: true });
const Video = model("Video", VideoSchema);
module.exports = Video;
