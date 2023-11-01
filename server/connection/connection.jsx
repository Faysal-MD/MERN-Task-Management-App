const mongoose = require("mongoose");
require("dotenv").config();

const connection = async (req, res) => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      console.error("MongoDB URI is not defined in the .env file");
      return;
    }
    await mongoose.connect(mongoUri).then(() => {
      console.log("MongoDB Database Connected");
    });
  } catch (error) {
    res.status(400).json({
      message: "MongoDB Not Connected",
    });
  }
};

connection();
