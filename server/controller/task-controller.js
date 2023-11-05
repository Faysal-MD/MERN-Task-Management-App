import task from "../model/Task.js";

export const addTask = async (req, res) => {
  try {
    const newTask = await task.create({
      data: req.body.data,
      createdAt: Date.now(),
    });

    await newTask.save();

    return res.status(200).json(newTask);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
