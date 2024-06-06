const { model, Schema } = require("mongoose");
const RoleSchema = new Schema({
  title: {
    type: string,
    required: true,
    unique: true,
  },
});
const Role = model("Role", RoleSchema);
module.exports = Role;
