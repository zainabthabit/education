const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const LevelsSchema = new Schema({
  name: {
    type: String,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
const Level = model("Level", LevelsSchema);
module.exports = Level;
