const mongoose = require("mongoose");

const connection = async (req, res) => {
  try {
    await mongoose
      .connect("mongodb+srv://faysal:1234@cluster0.wqvenzk.mongodb.net/")
      .then(() => {
        console.log("MongoDB Connected");
      });
  } catch (error) {
    res.status(400).json({
      message: "MongoDB Not Connected",
    });
  }
};

connection();
