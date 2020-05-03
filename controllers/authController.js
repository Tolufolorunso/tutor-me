const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please enter email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(AppError("Incorrect email or password", 401));
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(200).json({
    status: "success",
    user,
    token,
  });
});

exports.authorize = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("You are not login, please log in", 401));
  }

  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const currentUser = await User.findById(decodedToken.id);
  console.log(currentUser);
  if (!currentUser) {
    return next(new AppError("The user doesnt exists", 401));
  }

  if (currentUser.changedPasswordAfter(decodedToken.iat)) {
    return next(
      new AppError("User recently changed password! please log in again", 401)
    );
  }
  req.user = currentUser;
  next();
});

exports.authorizeAdmin = (...roles) => {
  return (req, res, next) => {
    console.log("user: ", req.user);
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have access to perform the operation!", 403)
      );
    }
    next();
  };
};

const user = {
  name: "Tolulope Folorunso",
  email: "admin@yahoo.com",
  password: "123",
  passwordConfirm: "123",
  role: "admin",
};

// User.create(user, (error) => {
//   if (error) {
//     throw error;
//   }
// });
