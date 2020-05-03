const mongoose = require("mongoose");
const Category = require("../models/categoryModels");
const Subject = require("../models/subjectsModel");

class Helper {
  addSubjectToCategory(subjectId, categoryId) {
    return Subject.findByIdAndUpdate(
      subjectId,
      { category: categoryId },
      { new: true, useFindAndModify: false }
    );
  }
}

module.exports = new Helper();
