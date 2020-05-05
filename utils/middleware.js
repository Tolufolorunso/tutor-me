const Lesson = require("../models/LessonsModel");
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
}

module.exports = new Middleware();
