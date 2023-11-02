import { useState } from "react";
import TaskCards from "./TaskCards";

const Task = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = () => {
    setArray([...Array, Inputs]);
    setInputs({ title: "", body: "" });
  };

  const del = (id) => {
    Array.splice(id, "1");
    setArray([...Array]);
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="task-main text-center p-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-96">
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200"
                placeholder="Enter the task title"
                required
                onChange={change}
                value={Inputs.title}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Body
              </label>
              <textarea
                name="body"
                className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200"
                placeholder="Enter the task description"
                required
                onChange={change}
                value={Inputs.body}
              ></textarea>
            </div>

            <button
              className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200"
              onClick={submit}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>

      <div className="task-body flex flex-wrap justify-center">
        {Array &&
          Array.map((item, index) => (
            <div
              className="w-96 p-3 m-4 bg-white rounded-md shadow-md"
              key={index}
            >
              <TaskCards
                key={index}
                title={item.title}
                body={item.body}
                id={index}
                delid={del}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Task;
