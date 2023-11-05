// const Task = ({task}) => {
//   return (
//     <li>
//       <span>{task.data}</span>
//     </li>
//   );
// };

// export default Task;

import { toggleTask } from "../redux/actions";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li
      className="bg-gray-100 rounded-md shadow-sm p-3 flex items-center justify-between my-2"
      onClick={() => dispatch(toggleTask(task._id))}
      style={{
        textDecoration: task.done ? "line-through" : "",
      }}
    >
      <span className="text-gray-800 cursor-pointer">{task.data}</span>
      <div className="space-x-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
