const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");

// Get all problems
router.get("/", async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new problem
router.post("/", async (req, res) => {
  const problem = new Problem({
    title: req.body.title,
    description: req.body.description,
    constraints: req.body.constraints,
    inputExample: req.body.inputExample,
    outputExample: req.body.outputExample,
    difficulty: req.body.difficulty,
  });

  try {
    const newProblem = await problem.save();
    res.status(201).json(newProblem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a problem
router.put("/:id", async (req, res) => {
  try {
    const updatedProblem = await Problem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProblem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a problem
router.delete("/:id", async (req, res) => {
  try {
    await Problem.findByIdAndDelete(req.params.id);
    res.json({ message: "Problem deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
