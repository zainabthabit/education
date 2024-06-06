const User = require("../models/User");
const Role = require("../models/Role");
exports.changeRole = async (req, res) => {
  try {
    const Id = req.params.Id;
    const newRoles = req.body.roles;
    const roles = await Role.find({ _id: { $in: newRoles } });
    if (roles.length !== newRoles.length) {
      return res.status(400).send({ message: "One or more roles are invalid" });
    }

    const user = await User.findOneAndUpdate(
      { _id: Id },
      { $set: { roles: newRoles } },
      { new: true }
    ).populate("roles");

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
