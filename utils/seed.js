const User = require("../models/userModels");
// const User = require("../models/userModels");

console.log(User);

const user = {
  name: "Tolulope Folorunso",
  email: "admin@yahoo.com",
  password: "123",
  role: "admin",
};

User.create(user, (error) => {
  if (error) {
    throw error;
  }
});
