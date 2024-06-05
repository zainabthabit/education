const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const VideoSchema = new Schema({
  title: {
    type: String,
  },

  description: { type: String },
  filename: {
    type: String,
  },
  uploadDate: { type: Date },
});
const Video = model("Video", VideoSchema);
module.exports = Video;
