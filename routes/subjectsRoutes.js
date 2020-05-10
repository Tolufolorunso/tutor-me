const express = require("express");
const router = express.Router();
const subjectsController = require("./../controllers/subjectsController");
const Subject = require("./../models/subjectsModel");
const AppError = require("./../utils/appError");
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(subjectsController.getAllSubject)
  .post(
    authController.authorize,
    authController.authorizeFor("admin"),
    subjectsController.createSubject
  );

router
  .route("/register/:subjectId")
  .patch(
    authController.authorize,
    authController.authorizeFor("admin", "tutor"),
    subjectsController.registerSubject
  );
router
  .route("/tutor/subjects")
  .get(
    authController.authorize,
    authController.authorizeFor("admin", "tutor"),
    subjectsController.getTutorSubjects
  );
router
  .route("/tutor/subjects/:subjectId")
  .patch(
    authController.authorize,
    authController.authorizeFor("admin", "tutor"),
    subjectsController.deleteTutorSubjects
  );

module.exports = router;
