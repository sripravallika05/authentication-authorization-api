const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const user = await authService.register(
      req.body.name,
      req.body.email,
      req.body.password
    );
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const data = await authService.login(
      req.body.email,
      req.body.password
    );
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

const refresh = async (req, res) => {
  try {
    const data = await authService.refreshToken(req.body.refreshToken);
    res.json(data);
  } catch (err) {
    res.status(403).json({ error: err.message });
  }
};

const logout = async (req, res) => {
  try {
    await authService.logout(req.body.refreshToken);
    res.json({ message: "Logged out" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  register,
  login,
  refresh,
  logout,
};