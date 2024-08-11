const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb://localhost:27017/mydatabase';
    if (!mongoURI) {
      throw new Error("MONGO_URI not defined in .env file");
    }
    await mongoose.connect(mongoURI, {
      // No need for useNewUrlParser and useUnifiedTopology options
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
