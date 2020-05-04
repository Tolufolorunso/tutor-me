// // const mongoose = require("mongoose");

// const subjectSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "category require"],
//     trim: true,
//     min: [4, "Name is too short!"],
//     max: 40,
//   },
//   category_name: {
//     type: String,
//     // required: [true, "category require"],
//     uppercase: true,
//     trim: true,
//     min: [2, "Name is too short!"],
//     max: 40,
//   },
//   category: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "categories",
//   },
// });

// module.exports = mongoose.model("Subject", subjectSchema);
