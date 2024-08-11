const express = require("express");
const connectDB = require("./db"); // Import the connection function

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Import and use routes
const problemRoutes = require("./routes/Problem.js");
app.use("/api/problems", problemRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
