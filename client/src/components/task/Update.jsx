// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Update = () => {
//   return (
//     <>
//       <div
//         className="task w-full h-full flex flex-col items-center"
//         style={{ display: "none" }}
//       >
//         <ToastContainer />
//         <div className="task-main text-center p-4">
//           <p className="text-2xl font-semibold mb-6">Update Your Task</p>
//           <div className="bg-gray-100 p-4 rounded-lg shadow-md w-96">
//             <div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-600">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200"
//                   placeholder="Enter the task title"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-600">
//                   Body
//                 </label>
//                 <textarea
//                   name="body"
//                   className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200"
//                   placeholder="Enter the task description"
//                 ></textarea>
//               </div>

//               <button className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200">
//                 Update Task
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Update;

// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Update.css";

// const Update = ({ isVisible, display }) => {
//   // Use the isVisible prop to control the display of the component
//   const style = isVisible ? {} : { display: "none" };
//   return (
//     <>
//       <div
//         className="task w-full h-full flex flex-col items-center"
//         style={style}
//       >
//         {/* <ToastContainer /> */}
//         <div className="task-main text-center p-4">
//           <p className="text-2xl font-semibold mb-6">Update Your Task</p>
//           <div className="bg-gray-100 p-4 rounded-lg shadow-md w-96">
// <div>
//   <div className="mb-4">
//     <label className="block text-sm font-medium text-gray-600">
//       Title
//     </label>
//     <input
//       type="text"
//       name="title"
//       className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200"
//       placeholder="Enter the task title"
//     />
//   </div>

//   <div className="mb-4">
//     <label className="block text-sm font-medium text-gray-600">
//       Body
//     </label>
//     <textarea
//       name="body"
//       className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200"
//       placeholder="Enter the task description"
//     ></textarea>
//   </div>

//               <div className="flex">
//                 <button className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200">
//                   Update
//                 </button>
//                 <button
//                   className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:ring focus:ring-indigo-200 mx-4"
//                   onClick={() => {
//                     display("none");
//                   }}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Update;

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = ({ toggleUpdate }) => {
  return (
    <>
      <div className="task w-full h-full flex flex-col items-center">
        <ToastContainer />
        <div className="task-main text-center p-4">
          <p className="text-2xl font-semibold mb-6">Update Your Task</p>
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
                ></textarea>
              </div>

              <div className="flex mx-2">
                <button className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200">
                  Update Task
                </button>
                <button
                  className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:ring focus:ring-red-200 ml-2"
                  onClick={toggleUpdate}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
