const userModel = require("../models/userModel");
const tokenModel = require("../models/tokenModel");
const { hashPassword, comparePassword } = require("../utils/passwordUtil");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../utils/jwtUtil");

const register = async (name, email, password) => {
  const existing = await userModel.findUserByEmail(email);
  if (existing) throw new Error("User already exists");

  const hashed = await hashPassword(password);

  return await userModel.createUser(name, email, hashed);
};

const login = async (email, password) => {
  const user = await userModel.findUserByEmail(email);
  if (!user) throw new Error("User not found");

  const valid = await comparePassword(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  await tokenModel.saveRefreshToken(user.id, refreshToken);

  return { accessToken, refreshToken, user };
};

const refreshToken = async (token) => {
  if (!token) throw new Error("No token");

  const stored = await tokenModel.findRefreshToken(token);
  if (!stored) throw new Error("Invalid refresh token");

  const decoded = verifyRefreshToken(token);

  const user = await userModel.findUserById(decoded.id);

  return {
    accessToken: generateAccessToken(user),
  };
};

const logout = async (token) => {
  await tokenModel.deleteRefreshToken(token);
};

module.exports = {
  register,
  login,
  refreshToken,
  logout,
};