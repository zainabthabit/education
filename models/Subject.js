const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SubjectsSchema = new Schema({
  name: {
    type: String,
  },
  level: [
    {
      type: Schema.Types.ObjectId,
      ref: "Level",
    },
  ],
});
const Subject = model("Subject", SubjectsSchema);
module.exports = Subject;
