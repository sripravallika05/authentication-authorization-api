const router = require("express").Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

router.get("/profile", authMiddleware, userController.profile);

router.get(
  "/admin",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  userController.adminPanel
);

module.exports = router;