const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
});

const authSchema = mongoose.model("node_aws_ci_cd", userSchema);

module.exports = authSchema;
