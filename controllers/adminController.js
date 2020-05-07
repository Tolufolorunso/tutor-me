const Category = require("../models/categoryModel");
const Subject = require("../models/subjectsModel");
const User = require("../models/userModel");
const Helper = require("../utils/helperFunction");
const Api = require("../utils/api");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllTutors = catchAsync(async (req, res, next) => {
  // const tutors = await User.find({ role: "tutor" }).select("-__v");
  const allTutors = new Api(User.find({ role: "tutor" }), req.query)
    .filter()
    .sort("firstname");
  const tutors = await allTutors.query;

  if (!tutors) {
    return next(new AppError("Tutors are not available inside DB", 404));
  }

  res.status(200).json({
    status: "success",
    result: tutors.length,
    data: {
      tutors,
    },
  });
});

exports.getTutor = catchAsync(async (req, res, next) => {
  const tutor = res.tutor;
  res.status(200).json({
    status: "success",
    data: {
      tutor,
    },
  });
});

exports.deactivateTutor = catchAsync(async (req, res, next) => {
  res.tutor.active = false;
  await res.tutor.save({ validateBeforeSave: false });
  res.status(200).json({
    status: "success",
    data: {
      message: "User deleted successfully",
    },
  });
});
