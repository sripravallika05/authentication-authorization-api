const userModel = require("../models/userModel");

const profile = async (req, res) => {
  const user = await userModel.findUserById(req.user.id);
  res.json(user);
};

const adminPanel = async (req, res) => {
  res.json({ message: "Admin Access Granted" });
};

module.exports = { profile, adminPanel };