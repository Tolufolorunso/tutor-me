const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

//modules
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

//Routes
const subjectsRouter = require("./routes/subjectsRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const usersRouter = require("./routes/userRoutes");
const adminRouter = require("./routes/adminRoutes");
const lessonsRouter = require("./routes/lessonsRoutes");

dotenv.config({
  path: "./config.env",
});
const app = express();

//middleware
app.use(cors());

app.options("*", cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP",
});

app.use("/api", limiter);

app.use(express.json());

app.use("/api/v1/subjects", subjectsRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/user", usersRouter);
app.use("/api/v1/lessons", lessonsRouter);

// app.use("/api/v1/subjects", subjectsRouter);
app.use("/api/v1/categories", categoryRouter);

app.use("/api/v1/users", adminRouter);

//HOMEPAGE route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "tutoring app built with love",
    app: "tutor us",
  });
});

//Handling unhandle routes
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Routes not found. Can't find ${req.originalUrl} on this server`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = app;
