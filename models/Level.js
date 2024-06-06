const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const LevelsSchema = new Schema({
  name: {
    type: String,
  },
  video: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});
const Level = model("Level", LevelsSchema);
module.exports = Level;
