import { useEffect, useState } from "react";
import TaskCards from "./TaskCards";
import Update from "./Update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

let id = sessionStorage.getItem("id");
const Task = () => {
  // const dispatch = useDispatch();
  const [Inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  const [Array, setArray] = useState([]);
  const [isUpdateVisible, setUpdateVisible] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Title and Body should not be empty");
    } else {
      if (id) {
        await axios
          .post("http://localhost:1000/api/v2/addTask", {
            title: Inputs.title,
            body: Inputs.body,
            id: id,
          })
          .then((response) => {
            console.log(response);
          });

        setInputs({ title: "", body: "" });
        toast.success("Your task is added");
      } else {
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
        toast.success("Your task is added");
        toast.error("Your Task is Not Saved! Please SignUp First");
      }
    }
  };

  const del = async (Cardid) => {
    await axios
      .delete(`http://localhost:1000/api/v2/deleteTask/${Cardid}`, {
        data: { id: id },
      })
      .then(() => {
        toast.success("Your task is deleted");
      });
  };

  const toggleUpdate = () => {
    setUpdateVisible(!isUpdateVisible);
  };

  useEffect(() => {
    const fetch = async () => {
      await axios
        .post(`http://localhost:1000/api/v2/getTasks/${id}`)
        .then((response) => {
          setArray(response.data.list);
        });
    };
    fetch();
  }, [submit]);

  return (
    <>
      <div className="task w-full h-full flex flex-col items-center">
        <ToastContainer />
        <div className="task-main text-center p-4">
          <p className="text-2xl font-semibold mb-6">Add Your Task</p>
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
          {Array.map((item, index) => (
            <div
              className="w-96 p-3 m-4 bg-white rounded-md shadow-md"
              key={index}
            >
              <TaskCards
                key={index}
                title={item.title}
                body={item.body}
                id={item._id}
                delid={del}
                display={toggleUpdate}
              />
            </div>
          ))}
        </div>
      </div>

      {isUpdateVisible && (
        <div
          className="w-full h-full fixed top-20 left-0 bg-amber-200"
          id="task-update"
        >
          <Update toggleUpdate={toggleUpdate} />
        </div>
      )}
    </>
  );
};

export default Task;
