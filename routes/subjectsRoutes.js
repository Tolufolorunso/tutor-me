const express = require("express");
const router = express.Router();
const subjectsController = require("../controllers/subjectsController");

router
  .route("/")
  .get(subjectsController.getAllSubject)
  .post(subjectsController.createSubject);

router.route("/register/:id").patch(subjectsController.registerSubject);

module.exports = router;
