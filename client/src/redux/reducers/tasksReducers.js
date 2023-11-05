import * as actionTypes from "../actions/type";

const tasksReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TASK:
      return [action.payload, ...state];
    case actionTypes.GETALL_TASK:
      return action.payload;
    case actionTypes.TOGGLE_TASK:
      return state.map((task) =>
        task._id === action.payload._id ? { ...task, done: !task.done } : task
      );

    default:
      return state;
  }
};

export default tasksReducers;
