const { text } = require("express");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CommentsSchema = new Schema({
    text: {
        type: String,
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: "Blog",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });
const Comment = model("Comment", CommentsSchema);

module.exports = Comment;
