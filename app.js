const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});
const app = express();

//middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//HOMEPAGE route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "tutoring app built with love",
    app: "tutoring-app",
  });
});

module.exports = app;
