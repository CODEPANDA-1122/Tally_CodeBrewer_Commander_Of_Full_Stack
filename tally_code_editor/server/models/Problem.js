const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  constraints: String,
  inputExample: String,
  outputExample: String,
  difficulty: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Problem", ProblemSchema);
