const mongoose = require("mongoose");

const UserSchema = new mongoose.UserSchema(
  {
    username: {
      type: string,
      require: true,
      unique: true,
    },
    password: {
      type: string,
      require: true,
      unique: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", UserSchema);