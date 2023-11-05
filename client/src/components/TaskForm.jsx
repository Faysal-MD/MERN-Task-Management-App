import { useState } from "react";
import { addNewTask } from "../redux/actions";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTask(text));
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="w-96 mx-auto" onSubmit={onFormSubmit}>
      <input
        type="text"
        className="w-96 py-2 px-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Enter New Task"
        onChange={onInputChange}
        value={text}
      />
    </form>
  );
};

export default TaskForm;
