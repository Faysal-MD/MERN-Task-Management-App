// // import { useState } from "react";
// // import { addNewTask } from "../redux/actions";
// // import { useDispatch } from "react-redux";

// // const TaskForm = () => {
// //   const [text, setText] = useState("");
// //   const dispatch = useDispatch();

// //   const onFormSubmit = (e) => {
// //     e.preventDefault();
// //     dispatch(addNewTask(text));
// //     setText("");
// //   };

// //   const onInputChange = (e) => {
// //     setText(e.target.value);
// //   };

// //   return (
// //     <form className="w-96 mx-auto" onSubmit={onFormSubmit}>
// //       <input
// //         type="text"
// //         className="w-96 py-2 px-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
// //         placeholder="Enter New Task"
// //         onChange={onInputChange}
// //         value={text}
// //       />
// //     </form>
// //   );
// // };

// // export default TaskForm;

// import { useState } from "react";
// import { addNewTask } from "../redux/actions";
// import { useDispatch } from "react-redux";

// const TaskForm = () => {
//   const [text, setText] = useState("");
//   const dispatch = useDispatch();

//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addNewTask(text));
//     setText("");
//     alert("Task added"); // Show an alert after adding the task
//   };

//   const onInputChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <form className="w-96 mx-auto" onSubmit={onFormSubmit}>
//       <input
//         type="text"
//         className="w-96 py-2 px-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
//         placeholder="Enter New Task"
//         onChange={onInputChange}
//         value={text}
//       />
//       <button
//         type="button"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 my-2 rounded ml-2"
//         onClick={onFormSubmit}
//       >
//         Add Task
//       </button>
//     </form>
//   );
// };

// export default TaskForm;

import { useState } from "react";
import { addNewTask } from "../redux/actions";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setErrorMessage("Please enter a task."); // Show an error message if the input is empty
    } else {
      dispatch(addNewTask(text));
      setText("");
      setErrorMessage(""); // Clear the error message
      alert("Task added");
    }
  };

  const onInputChange = (e) => {
    setText(e.target.value);
    setErrorMessage(""); // Clear the error message when the input changes
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
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 my-2 rounded ml-2"
        onClick={onFormSubmit}
      >
        Add Task
      </button>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </form>
  );
};

export default TaskForm;
