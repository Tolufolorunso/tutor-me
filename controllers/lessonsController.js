const Lesson = require("./../models/lessonsModel");

const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

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

exports.bookLesson = catchAsync(async (req, res, next) => {
  // const currentDate = new Date().getTime();
  // const userInputDate = new Date(req.body.lessonDate).getTime();
  // const differenceInTime = userInputDate - currentDate;
  // const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  const lessonDate = new Date(req.body.lessonDate).toDateString();

  // function addDays(date, days) {
  //   const result = new Date(date);
  //   result.setDate(result.getDate() + days);
  //   return result.toDateString();
  // }
  if (!req.user.phone) {
    req.body.phone = req.body.phone;
  } else {
    req.body.phone = req.user.phone;
  }
  req.body.lessonDate = lessonDate;
  req.body.userID = req.user._id;
  req.body.user = `${req.user.surname} ${req.user.firstname}`;

  const lesson = await Lesson.create(req.body);
  if (!lesson) {
    return next(new AppError("lesson error", 404));
  }
  res.status(201).json({
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
  const lessonDate = new Date(req.body.lessonDate).toDateString();
  if (req.body.user != null) {
    res.lesson.user = req.body.user;
  }
  if (req.body.lessonDate != null) {
    res.lesson.lessonDate = lessonDate;
  }
  if (req.body.phone != null) {
    res.lesson.phone = req.body.phone;
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
