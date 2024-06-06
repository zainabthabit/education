const { model, Schema } = require("mongoose");
const UserSchema = new Schema({
  fullName: {
    type: String,
    unique: true,
    require: true,
  },
  username: {
    type: String,
    unique: true,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  img: {
    type: String,
  },
  password: {
    type: String,
  },
  roles: {
    type: String,
    default: "user",
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
  },
  level: [
    {
      type: Schema.Types.ObjectId,
      ref: "Level",
    },
  ],
});

const User = model("User", UserSchema);
module.exports = User;
