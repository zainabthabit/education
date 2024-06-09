const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    introduction: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
    },
    rating: {
        type: Number,
    },
    img: {
        type: String,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });
const Blog = model("Blog", BlogSchema);
module.exports = Blog;
