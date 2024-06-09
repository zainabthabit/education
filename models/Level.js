const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const LevelsSchema = new Schema({
    name: {
        type: String,
    },
    subjects: [
        {
            type: Schema.Types.ObjectId,
            ref: "Subject",
        },
    ],
}, { timestamps: true });
const Level = model("Level", LevelsSchema);
module.exports = Level;
