const router = require("express").Router();
const User = require("../models/user.jsx");
const Task = require("../models/task.jsx");

router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    //   if user exists then give the title and body
    if (existingUser) {
      const task = new Task({ title, body, user: existingUser });
      await task.save().then(() => res.status(200).json({ task }));
      existingUser.task.push(task);
      existingUser.save();
    }
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
