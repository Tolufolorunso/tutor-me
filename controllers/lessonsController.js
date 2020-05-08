const Category = require("../models/categoryModel");
const Subject = require("../models/subjectsModel");
const Lesson = require("../models/LessonsModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllLessons = catchAsync(async (req, res, next) => {
  const lessons = await Lesson.find().populate("userID tutorID subject").exec();
  if (!lessons) {
    return next(new AppError("Tutors are not available inside DB", 404));
  }
  res.status(200).json({
    status: "success",
    result: lessons.length,
    data: {
      lessons,
    },
  });
});

exports.createLesson = catchAsync(async (req, res, next) => {
  req.body.user = `${req.user.surname} ${req.user.firstname}`;
  req.body.userID = `${req.user._id}`;
  const lesson = await Lesson.create(req.body);
  if (!lesson) {
    return next(new AppError("lesson error", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      lesson,
    },
  });
});
exports.getALesson = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      lesson: res.lesson,
    },
  });
});

exports.deleteALesson = catchAsync(async (req, res, next) => {
  await res.lesson.remove();
  res.status(200).json({
    status: "success",
    message: "Lesson deleted successfully",
    data: null,
  });
});

exports.updateALesson = catchAsync(async (req, res, next) => {
  if (req.body.user != null) {
    res.lesson.user = req.body.user;
  }
  const updatedLesson = await res.lesson.save();
  res.status(200).json({
    status: "success",
    message: "Lesson updated successfully",
    data: {
      updatedLesson,
    },
  });
});
