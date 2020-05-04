const Category = require("../models/categoryModel");
const Subject = require("../models/subjectsModel");
const Helper = require("../utils/helperFunction");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getCategory = catchAsync(async (req, res) => {
  const category = await Category.find();

  if (!category) {
    return next(new AppError("Category not found", 404));
  }

  res.status(200).json({
    status: "success",
    lenght: category.length,
    data: {
      category: category,
    },
  });
});
exports.getAllSubjectsInCategory = catchAsync(async (req, res) => {
  const categoryId = req.params.id;
  const subjects = await Subject.find({ category: categoryId });
  console.log(subjects);
  if (!subjects) {
    return next(
      new AppError(
        "Subjects are not found under this category, contact the admin",
        404
      )
    );
  }

  const categoryName = subjects[0].category_name;

  res.status(200).json({
    status: "success",
    lenght: subjects.length,
    category: categoryName,
    data: {
      subjects,
    },
  });
});

exports.updateSubjectInCategory = catchAsync(async (req, res, next) => {
  const subjects = await Subject.find({ category: req.params.categoryId });

  const subjectId = subjects.find((subId) => {
    return subId._id !== req.params.subjectId;
  })._id;

  await Subject.findByIdAndUpdate(subjectId, req.body);

  res.status(200).json({
    status: "success",
    message: "Data updated successfully",
  });
});

exports.deleteSubjectInCategory = catchAsync(async (req, res, next) => {
  const subjects = await Subject.find({ category: req.params.categoryId });

  if (!subjects.length) {
    return next(
      new AppError(
        "Subjects are not found under this category, contact the admin",
        404
      )
    );
  }

  const subjectId = subjects.find((subId) => {
    return subId._id !== req.params.subjectId;
  })._id;

  await Subject.findByIdAndDelete(subjectId);

  res.status(200).json({
    status: "success",
    message: "Data deleted successfully",
  });
});

exports.createCategory = catchAsync(async (req, res, next) => {
  const newCategory = await Category.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      category: newCategory,
    },
  });
});

exports.updateCategory = catchAsync(async (req, res) => {
  const categoryUpdated = await Category.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(200).json({
    status: "success",
    data: {
      category: categoryUpdated,
    },
  });
});

exports.deleteCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category) {
    return next(
      new AppError("Subjects nor Category are found, contact the admin", 404)
    );
  }

  await Subject.deleteMany({ category: category._id }, (error, data) => {
    if (data.ok) {
      res.status(204).json({
        status: "success",
        message: "all subjects deleted successfully with the category",
        data: null,
      });
    }
  });
});
