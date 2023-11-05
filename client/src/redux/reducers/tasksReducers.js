import * as actionTypes from "../actions/type";

const tasksReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TASK:
      return [action.payload, ...state];

    default:
      return state;
  }
};

export default tasksReducers;
