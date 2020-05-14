const mongoose = require("mongoose");
const AppError = require("./../utils/appError");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "category require"],
    trim: true,
    min: [4, "Name is too short!"],
    max: 40,
    uppercase: true,
  },
  category_name: {
    type: String,
    required: [true, "category require"],
    uppercase: true,
    trim: true,
    min: [2, "Name is too short!"],
    max: 40,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
});

subjectSchema.pre("save", async function (next) {
  const subjectExistsInCategory = await Subject.findOne({
    name: this.name.toUpperCase(),
    category_name: this.category_name.toUpperCase(),
  });
  if (subjectExistsInCategory) {
    return next(new AppError("Subject exists in the category", 400));
  }
  next();
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
