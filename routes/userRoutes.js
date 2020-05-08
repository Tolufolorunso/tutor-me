const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.route("/signup/user").post(authController.signupUser);
router.route("/signup/tutor").post(authController.signupTutor);
router.route("/login").post(authController.login);

module.exports = router;
