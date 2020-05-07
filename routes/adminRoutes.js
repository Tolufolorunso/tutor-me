const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");
const User = require("../models/userModel");
const { getATutor } = require("../utils/middleware");

router.get(
  "/",
  authController.authorize,
  authController.authorizeFor("admin"),
  async (req, res, next) => {
    const admin = await User.findOne({ role: "admin" }).select("-__v");
    if (!admin) {
      return next(new AppError("something went wrong", 500));
    }
    res.status(200).json({
      status: "success",
      data: {
        admin,
      },
    });
  }
);

router
  .route("/get-tutors")
  .get(
    authController.authorize,
    authController.authorizeFor("admin", "user"),
    adminController.getAllTutors
  );

router
  .route("/get-tutors/:tutorId")
  .get(authController.authorize, getATutor, adminController.getTutor)
  .delete(
    authController.authorize,
    authController.authorizeFor("admin"),
    getATutor,
    adminController.deactivateTutor
  );

module.exports = router;
