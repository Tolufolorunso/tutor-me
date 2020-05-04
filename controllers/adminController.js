const Category = require("../models/categoryModel");
const Subject = require("../models/subjectsModel");
const User = require("../models/userModel");
const Helper = require("../utils/helperFunction");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllTutors = catchAsync(async (req, res, next) => {
  const tutors = await User.find({ role: "tutor" }).select("-__v");
  console.log(tutors);
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
  const tutor = await User.findOne({
    role: "tutor",
    _id: req.params.tutorId,
  }).select("-__v");
  console.log(tutor);
  if (!tutor) {
    return next(new AppError("Tutor is not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      tutor,
    },
  });
});
exports.deactivateTutor = catchAsync(async (req, res, next) => {
  const tutor = await User.findByIdAndDelete(req.params.tutorId).select("-__v");
  if (!tutor) {
    return next(new AppError("Tutor is not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      message: "User deleted successfully",
    },
  });
});
