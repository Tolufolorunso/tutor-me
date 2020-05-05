const Subject = require("../models/subjectsModel");
const Category = require("../models/categoryModel");
const Helper = require("../utils/helperFunction");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllSubject = catchAsync(async (req, res) => {
  const subject = await Subject.find();
  res.status(200).json({
    status: "success",
    results: subject.length,
    data: {
      subject: subject,
    },
  });
});

exports.registerSubject = catchAsync(async (req, res) => {
  console.log(req.user);
  res.status(200).json({
    status: "success",
    // results: subject.length,
    // data: {
    //   subject: subject,
    // },
  });
});

exports.createSubject = catchAsync(async (req, res) => {
  const newSubject = await Subject.create(req.body);
  //   console.log(newSubject.category_name);

  Category.findOne(
    {
      name: newSubject.category_name,
    },
    async function (err, category) {
      try {
        console.log(category._id);
        await Helper.addSubjectToCategory(newSubject._id, category._id);
      } catch {
        if (err) console.log(err);
      }
    }
  );

  res.status(201).json({
    status: "success",
    data: {
      subject: newSubject,
    },
  });
});

exports.updateSubject = catchAsync(async (req, res) => {
  console.log(req.params.categoryId);
  const subject = await Subject.findOneAndUpdate(
    req.params.categoryId,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: {
      subject,
    },
  });
});

// exports.deleteSubject = async (req, res) => {
//   try {
//     console.log(req.params.categoryId);
//     const subject = await Subject.findOneAndRemove(
//       req.params.categoryId,
//       (error, data) => {
//         if (error) res.send(error);
//       }
//     );
//     res.status(204).json({
//       status: "success",
//       data: null,
//     });
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error,
//     });
//   }
// };
