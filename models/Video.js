const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const VideoSchema = new Schema({
  title: {
    type: String,
  },

  uploadDate: { type: Date },
  subject: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const Video = model("Video", VideoSchema);
module.exports = Video;
