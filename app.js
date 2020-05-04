const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

//modules
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

//My modules
const subjectsRouter = require("./routes/subjectsRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const usersRouter = require("./routes/userRoutes");

dotenv.config({
  path: "./config.env",
});
const app = express();

//middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/subjects", subjectsRouter);
app.use("/api/v1/category", categoryRouter);

// app.use("/api/v1/subjects", subjectsRouter);
app.use("/api/v1/categories", categoryRouter);

app.use("/api/v1/users", usersRouter);

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
