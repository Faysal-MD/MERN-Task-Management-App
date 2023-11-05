// import { useEffect } from "react";
// import { getAllTasks } from "../redux/actions/index";
// import { useDispatch, useSelector } from "react-redux";
// import Task from "./Task";

// export const Tasks = () => {
//   const dispatch = useDispatch();

//   const tasks = useSelector((state) => state.tasks);

//   useEffect(() => {
//     dispatch(getAllTasks());
//   }, []);

//   return (
//     <article className="w-96 mx-auto py-4">
//       <ul>
//         {tasks.map((task) => {
//           return <li key={task._id}>{task.data}</li>;
//         })}
//       </ul>
//     </article>
//   );
// };

// export default Tasks;

import { useEffect } from "react";
import { getAllTasks } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";

export const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <article className="w-96 mx-auto py-4 grid">
      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </article>
  );
};

export default Tasks;
