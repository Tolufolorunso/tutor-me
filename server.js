const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DATABASE connection successfull"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});
