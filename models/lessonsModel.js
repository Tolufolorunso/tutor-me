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
  subjectID: {
    type: mongoose.Schema.ObjectId,
    ref: "Subject",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lessonDate: {
    type: String,
    required: [true, "Choose the lesson date"],
  },
  phone: {
    type: String,
    required: [true, "Choose the lesson date"],
  },
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
