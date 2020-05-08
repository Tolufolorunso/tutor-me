const mongoose = require("mongoose");

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// process.env.DATABASE_LOCAL

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((c) => console.log("DATABASE connection successfull"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});
