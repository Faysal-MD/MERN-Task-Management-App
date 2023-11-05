import express from "express";
import {
  addTask,
  getAllTasks,
  toggleTaskDone,
} from "../controller/task-controller.js";

const route = express.Router();

route.post("/tasks", addTask);
route.get("/tasks", getAllTasks);
route.get("/tasks/:id", toggleTaskDone);

export default route;
