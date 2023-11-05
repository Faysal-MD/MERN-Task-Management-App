import { useEffect } from "react";
import { deleteTask, getAllTasks } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import Tabs from "./Tabs";
import { ALL_TASKS, DONE_TASKS, ACTIVE_TASKS } from "../redux/actions/type";

export const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  const getTasks = () => {
    if (currentTab === ALL_TASKS) {
      return tasks;
    } else if (currentTab === ACTIVE_TASKS) {
      return tasks.filter((task) => !task.done);
    } else if (currentTab === DONE_TASKS) {
      return tasks.filter((task) => task.done);
    }
  };

  const removeDoneTasks = () => {
    tasks.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTask(_id));
      }
    });
  };

  return (
    <article className="w-96 mx-auto py-4 grid">
      <div>
        <Tabs currentTab={currentTab} />
        {tasks.some((task) => task.done) ? (
          <button
            className="bg-red-500 text-white hover:bg-red-600 font-semibold py-2 px-2 mx-1 my-2 rounded"
            onClick={removeDoneTasks}
          >
            Clear Done Tasks
          </button>
        ) : null}
      </div>
      <ul>
        {getTasks().map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </article>
  );
};

export default Tasks;
