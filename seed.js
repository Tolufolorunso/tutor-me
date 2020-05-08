const User = require("models/userModel");

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
