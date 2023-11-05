import { useState } from "react";
import { toggleTask, updateTask, deleteTask } from "../redux/actions";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.data);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing((prevState) => !prevState);
    dispatch(updateTask(task._id, text));
  };

  return (
    <div className="bg-gray-200 rounded-md shadow-sm p-3 flex items-center justify-between my-2">
      <li
        onClick={() => dispatch(toggleTask(task._id))}
        style={{
          textDecoration: task.done ? "line-through" : "",
        }}
      >
        <span
          className="text-gray-800 cursor-pointer"
          style={{ display: editing ? "none" : "" }}
        >
          {task.data}
        </span>

        <form
          style={{ display: editing ? "inline" : "none" }}
          onSubmit={onFormSubmit}
        >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </li>
      <div className="space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
          onClick={() => setEditing((prevState) => !prevState)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded"
          onClick={() => dispatch(deleteTask(task._id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
