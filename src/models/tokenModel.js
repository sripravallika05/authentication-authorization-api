const pool = require("../config/db");

const saveRefreshToken = async (userId, token) => {
  await pool.query(
    "INSERT INTO refresh_tokens (user_id, token) VALUES ($1,$2)",
    [userId, token]
  );
};

const findRefreshToken = async (token) => {
  const result = await pool.query(
    "SELECT * FROM refresh_tokens WHERE token=$1",
    [token]
  );
  return result.rows[0];
};

const deleteRefreshToken = async (token) => {
  await pool.query("DELETE FROM refresh_tokens WHERE token=$1", [token]);
};

module.exports = {
  saveRefreshToken,
  findRefreshToken,
  deleteRefreshToken,
};