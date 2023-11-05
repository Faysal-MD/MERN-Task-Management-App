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

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await task.find({}).sort({ createdAt: -1 });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const toggleTaskDone = async (req, res) => {
  try {
    const taskRef = await task.findById(req.params.id);
    const tasdk = await task.findOneAndUpdate(
      { _id: req.params.id },
      { done: !taskRef.done }
    );

    await tasdk.save();

    return res.status(200).json(tasdk);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const updateTask = async (req, res) => {
  try {
    await task.findOneAndUpdate(
      { _id: req.params.id },
      { data: req.body.data }
    );

    const tasdk = await task.findById(req.params.id);

    return res.status(200).json(tasdk);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const tasdk = await task.findByIdAndDelete(req.params.id);

    return res.status(200).json(tasdk);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
