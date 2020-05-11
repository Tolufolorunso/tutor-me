const Subject = require("./../models/subjectsModel");
const Category = require("./../models/categoryModel");
const Helper = require("./../utils/helperFunction");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const Api = require("./../utils/api");
const User = require("./../models/userModel");

exports.getAllSubject = catchAsync(async (req, res) => {
  // const subject = await Subject.find();
  const subjects = new Api(Subject.find(), req.query)
    .filter()
    .sort(req.query.sort);
  const subject = await subjects.query;
  res.status(200).json({
    status: "success",
    results: subject.length,
    data: {
      subject,
    },
  });
});

exports.registerSubject = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user._id, {
    $push: { subjects: req.params.subjectId },
  }).exec(function (e, data) {
    res.status(200).json({
      status: "success",
      message: "subject added",
    });
  });
  // console.log(req.params.subjectId);
});
exports.getTutorSubjects = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).populate({
    path: "subjects",
    select: "-__v",
  });

  res.status(200).json({
    status: "success",
    data: {
      subject: user,
    },
  });
});

exports.deleteTutorSubjects = catchAsync(async (req, res, next) => {
  const deletedSubject = await User.findByIdAndUpdate(
    { _id: req.user._id },
    { $pull: { subjects: req.params.subjectId } }
  );

  if (!deletedSubject.subjects.length) {
    return next(new AppError("No subject to be deleted", 400));
  }
  res.status(204).json({
    status: "success",
    message: "Deleted successfully",
    data: null,
  });
});

exports.createSubject = catchAsync(async (req, res, next) => {
  const subjectExistsInCategory = await Subject.findOne({
    name: req.body.name.toUpperCase(),
    category_name: req.body.category_name.toUpperCase(),
  });
  if (subjectExistsInCategory) {
    return next(new AppError("Subject exists in the category", 400));
  }

  const newSubject = await Subject.create(req.body);
  Category.findOne(
    {
      name: newSubject.category_name,
    },
    async function (err, category) {
      try {
        await Helper.addSubjectToCategory(newSubject._id, category._id);
      } catch {
        if (err) {
          res.status(500).json({
            status: "error",
            message: err.message,
          });
        }
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
