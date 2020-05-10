const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const lessonsController = require("./../controllers/lessonsController");
const { getLesson } = require("./../utils/middleware");

router
  .route("/")
  .get(
    authController.authorize,
    authController.authorizeFor("admin"),
    lessonsController.getAllLessons
  )
  .post(authController.authorize, lessonsController.createALesson);

router
  .route("/:id")
  .get(
    authController.authorize,
    authController.authorizeFor("admin"),
    getLesson,
    lessonsController.getALesson
  )
  .patch(
    authController.authorize,
    authController.authorizeFor("admin"),
    getLesson,
    lessonsController.updateALesson
  )
  .delete(
    authController.authorize,
    authController.authorizeFor("admin"),
    getLesson,
    lessonsController.deleteALesson
  );

module.exports = router;
