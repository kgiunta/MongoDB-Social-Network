const mongoose = require("mongoose");
const { Schema, model } = mongoose;

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema({
  username: { type: String, unique: true, trim: true, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: { type: Schema.Types.ObjectId, ref: "Thought" },
  friends: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = model("User", userSchema);

module.exports = User;
