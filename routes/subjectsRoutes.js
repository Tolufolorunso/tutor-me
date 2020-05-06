const express = require("express");
const router = express.Router();
const subjectsController = require("../controllers/subjectsController");
const Subject = require("../models/subjectsModel");
const AppError = require("../utils/appError");
const authController = require("../controllers/authController");

router
  .route("/")
  .get(authController.authorize, subjectsController.getAllSubject)
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

// async function (req, res, next) {
//   console.log(req.body.name, req.body.category_name);
//   return (await Subject.find({
//     name: req.body.name,
//     category_name: req.body.category_name,
//   }))
//     ? next(
//       new AppError("You do not have access to perform the operation!", 403)
//     )
//     : next();
// },
