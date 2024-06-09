const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SubjectsSchema = new Schema({
    name: {
        type: String,
    },
}, { timestamps: true });
const Subject = model("Subject", SubjectsSchema);
module.exports = Subject;
