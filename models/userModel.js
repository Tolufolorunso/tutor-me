const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please provide Your fistname"],
    trim: true,
  },
  surname: {
    type: String,
    required: [true, "Please provide Your surname"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 2,
    // select: false,
    trim: true,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please provide password"],
    trim: true,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Please, Passwords are not the same",
    },
  },
  phone: {
    type: String,
    validate: {
      validator: function (val) {
        return /[0]\d{10}$/.test(val);
      },
      message: (props) => `${props.value} is not a valid phone number`,
    },
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "tutor", "admin"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  // subjects: {
  //   type: Array,
  // },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
  passwordChangedAt: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

//Not to show Deactivated tutors or user
userSchema.pre("find", function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model("User", userSchema);
