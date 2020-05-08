const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    min: [2, "Name is too short"],
    uppercase: true,
    unique: [true, "jjjjj"],
  },
  description: {
    type: String,
    trim: true,
    minLen: [5, "Description is too short"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
