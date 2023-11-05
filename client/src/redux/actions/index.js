import axios from "axios";
import { ADDNEW_TASK, GETALL_TASK, TOGGLE_TASK } from "./type";

const API_URL = "http://localhost:8000";

export const addNewTask = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/tasks`, { data });
    dispatch({ type: ADDNEW_TASK, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTask API", error.message);
  }
};

export const getAllTasks = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/tasks`);
    dispatch({ type: GETALL_TASK, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTasks API", error.message);
  }
};

export const toggleTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/tasks/${id}`);
    dispatch({ type: TOGGLE_TASK, payload: res.data });
  } catch (error) {
    console.log("Error while calling toggleTask API", error.message);
  }
};