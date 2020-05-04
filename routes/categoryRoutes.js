const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const authController = require("../controllers/authController");

router
  .route("/")
  .get(authController.authorize, categoryController.getCategory)
  .post(
    authController.authorize,
    authController.authorizeAdmin("admin"),
    categoryController.createCategory
  );

router.route("/:id/subjects").get(categoryController.getAllSubjectsInCategory);

router
  .route("/:id")
  .get(authController.authorize, categoryController.getCategory)
  .patch(
    authController.authorize,
    authController.authorizeAdmin("admin"),
    categoryController.updateCategory
  )
  .delete(
    authController.authorize,
    authController.authorizeAdmin("admin"),
    categoryController.deleteCategory
  );

router
  .route("/id/subjects/:id")
  .patch(
    authController.authorize,
    authController.authorizeAdmin,
    categoryController.updateSubjectInCategory
  );

module.exports = router;
