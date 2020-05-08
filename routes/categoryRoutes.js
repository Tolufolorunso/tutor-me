const express = require("express");
const router = express.Router();
const categoryController = require("./../controllers/categoryController");
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(authController.authorize, categoryController.getCategory)
  .post(
    authController.authorize,
    authController.authorizeFor("admin"),
    categoryController.createCategory
  );

router
  .route("/:id/subjects")
  .get(authController.authorize, categoryController.getAllSubjectsInCategory);

router
  .route("/:catId/subjects/:subId")
  .get(authController.authorize, categoryController.getASubjectInCategory);

router
  .route("/:id")
  .get(authController.authorize, categoryController.getCategory)
  .patch(
    authController.authorize,
    authController.authorizeFor("admin"),
    categoryController.updateCategory
  )
  .delete(
    authController.authorize,
    authController.authorizeFor("admin"),
    categoryController.deleteCategory
  );

router
  .route("/:categoryId/subjects/:subjectId")
  .patch(
    authController.authorize,
    authController.authorizeFor("admin"),
    categoryController.updateSubjectInCategory
  )
  .delete(
    authController.authorize,
    authController.authorizeFor("admin"),
    categoryController.deleteSubjectInCategory
  );

module.exports = router;
