const Lesson = require("../models/LessonsModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");

class Middleware {
  async getLesson(req, res, next) {
    let lesson;
    try {
      lesson = await Lesson.findById(req.params.id);

      if (!lesson) {
        return next(new AppError("something went wrong", 500));
      }
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }

    res.lesson = lesson;
    next();
  }

  async getATutor(req, res, next) {
    let tutor;
    try {
      // tutor = await User.findOne({
      //   role: "tutor",
      //   _id: req.params.tutorId,
      // });
      tutor = await User.findById(req.params.tutorId);

      if (!tutor) {
        return next(new AppError("something went wrong", 500));
      }
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }

    res.tutor = tutor;
    next();
  }
}

module.exports = new Middleware();