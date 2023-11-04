const router = require("express").Router();
const User = require("../models/user.jsx");
const Task = require("../models/task.jsx");

// Create
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, id } = req.body;
    const existingUser = await User.findById(id);
    //   if user exists then give the title and body
    if (existingUser) {
      const task = new Task({ title, body, user: existingUser });
      await task.save().then(() => res.status(200).json({ task }));
      existingUser.task.push(task);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

// Update
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    //   if user exists then give the title and body
    if (existingUser) {
      const task = await Task.findByIdAndUpdate(req.params.id, { title, body });
      task.save().then(() => res.status(200).json({ message: "Task Updated" }));
    }
  } catch (error) {
    console.log(error);
  }
});

// Delete
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const existingUser = await User.findByIdAndUpdate(
      id,
      { $pull: { task: req.params.id } }
    );
    //   if user exists then give the title and body
    if (existingUser) {
      const task = await Task.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: "Task Deleted" })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

// get task
router.get("/getTasks/:id", async (req, res) => {
  // last added task will be shown in 1st row by using sort
  const task = await Task.find({ user: req.params.id }).sort({ createdAt: -1 });
  if (task.length !== 0) {
    res.status(200).json({ task });
  } else {
    res.status(200).json({ message: "No Tasks to Show" });
  }
});

module.exports = router;
