// import { AiFillDelete } from "react-icons/ai";
// import { GrDocumentUpdate } from "react-icons/gr";

// const TaskCards = ({ title, body, id, delid, display }) => {
//   return (
//     <div>
//       <div>
//         <p className="task-card text-lg font-semibold text-blue-700">{title}</p>
//         <p className="text-gray-600">{body.split("", 67)}...</p>
//       </div>
//       <div className="flex justify-between py-3">
//         <div
//           className="cursor-pointer flex items-center"
//           onClick={() => {
//             display("block");
//           }}
//         >
//           <GrDocumentUpdate /> <span className="ml-2">Update</span>
//         </div>
//         <div
//           className="text-red-700 cursor-pointer flex items-center"
//           onClick={() => {
//             delid(id);
//           }}
//         >
//           <AiFillDelete /> <span className="ml-2">Delete</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCards;

// import { AiFillDelete } from "react-icons/ai";
// import { GrDocumentUpdate } from "react-icons/gr";

// const TaskCards = ({ title, body, id, delid, display, toggleUpdateDisplay }) => {
//   return (
//     <div>
//       <div>
//         <p className="task-card text-lg font-semibold text-blue-700">{title}</p>
//         <p className="text-gray-600">{body.split("", 67)}...</p>
//       </div>
//       <div className="flex justify-between py-3">
//         <div
//           className="cursor-pointer flex items-center"
//           onClick={() => {
//             display("block");
//             toggleUpdateDisplay();
//           }}
//         >
//           <GrDocumentUpdate /> <span className="ml-2">Update</span>
//         </div>
//         <div
//           className="text-red-700 cursor-pointer flex items-center"
//           onClick={() => {
//             delid(id);
//           }}
//         >
//           <AiFillDelete /> <span className="ml-2">Delete</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCards;



import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TaskCards = ({ title, body, id, delid, display }) => {
  return (
    <div>
      <div>
        <p className="task-card text-lg font-semibold text-blue-700">{title}</p>
        <p className="text-gray-600">{body.split("", 67)}...</p>
      </div>
      <div className="flex justify-between py-3">
        <div
          className="cursor-pointer flex items-center"
          onClick={() => {
            display("block");
          }}
        >
          <GrDocumentUpdate /> <span className="ml-2">Update</span>
        </div>
        <div
          className="text-red-700 cursor-pointer flex items-center"
          onClick={() => {
            delid(id);
          }}
        >
          <AiFillDelete /> <span className="ml-2">Delete</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCards;
