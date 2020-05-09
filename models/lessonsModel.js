const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    trim: true,
  },
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  tutorID: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  subject: {
    type: mongoose.Schema.ObjectId,
    ref: "Subject",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  leasonAt: {
    type: Date,
  },
  select: false,
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
