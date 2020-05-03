const express = require("express");
const router = express.Router();
const subjectsController = require("../controllers/subjectsController");

router
  .route("/")
  .get(subjectsController.getAllSubject)
  .post(subjectsController.createSubject);

// router
//   .route("/")
//   .patch(subjectsController.updateSubject)
//   .delete(subjectsController.deleteSubject);

module.exports = router;
