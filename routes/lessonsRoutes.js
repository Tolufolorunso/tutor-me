const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const lessonsController = require("../controllers/lessonsController");
const { getLesson } = require("../utils/middleware");
console.log(getLesson);

router
  .route("/")
  .get(
    authController.authorize,
    authController.authorizeAdmin("admin"),
    lessonsController.getAllLessons
  )
  .post(authController.authorize, lessonsController.createLesson);

router
  .route("/:id")
  .get(
    authController.authorize,
    authController.authorizeAdmin("admin"),
    getLesson,
    lessonsController.getALesson
  )
  .patch(
    authController.authorize,
    authController.authorizeAdmin("admin"),
    getLesson,
    lessonsController.updateALesson
  )
  .delete(
    authController.authorize,
    authController.authorizeAdmin("admin"),
    getLesson,
    lessonsController.deleteALesson
  );

module.exports = router;
