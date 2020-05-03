const Category = require("../models/categoryModel");
// const Subject = require("../models/subjectsModel");
const Helper = require("../utils/helperFunction");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getCategory = catchAsync(async (req, res) => {
  const category = await Category.find();
  res.status(200).json({
    status: "success",
    lenght: category.length,
    data: {
      category: category,
    },
  });
});

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        category: newCategory,
      },
    });
  } catch {
    res.status(400).json({
      status: "fail",
      message: "not allowed",
    });
  }
};

exports.updateCategory = catchAsync(async (req, res) => {
  const categoryUpdated = await Category.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(201).json({
    status: "success",
    data: {
      category: categoryUpdated,
    },
  });
});

exports.deleteCategory = catchAsync(async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  await Subject.deleteMany({ category: category._id }, (error, data) => {
    if (data.ok === 1) console.log("deletd successfully");
  });
  res.status(204).json({
    status: "success",
    data: null,
  });
});
