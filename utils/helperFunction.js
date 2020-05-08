const mongoose = require("mongoose");
// const Category = require("../models/categoryModel");
const Subject = require("../models/subjectsModel");

class Helper {
  async addSubjectToCategory(subjectId, categoryId) {
    return await Subject.findByIdAndUpdate(
      subjectId,
      { category: categoryId },
      { new: true, useFindAndModify: false }
    );
  }
}

module.exports = new Helper();
