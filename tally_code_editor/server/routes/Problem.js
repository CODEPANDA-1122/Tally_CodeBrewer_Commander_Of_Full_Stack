const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");

// Get all problems
router.get("/problems", async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific problem
router.get("/:id", async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    res.json(problem);
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
    testCases: req.body.testCases,
  });

  try {
    const newProblem = await problem.save();
    res.status(201).json(newProblem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
