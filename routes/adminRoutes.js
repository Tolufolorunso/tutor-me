const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");

router.route("/get-tutors").get(adminController.getAllTutors);

router
  .route("/get-tutors/:tutorId")
  .get(adminController.getTutor)
  .delete(adminController.deactivateTutor);

module.exports = router;
