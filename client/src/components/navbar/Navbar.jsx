import { AiOutlineSchedule } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div>
      <nav className="p-4 mx-auto max-w-screen-lg">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center space-x-3 text-red-600"
          >
            <div className="text-4xl">
              <AiOutlineSchedule />
            </div>
            <div className="text-3xl font-bold">task</div>
          </a>
          <div className="ml-auto flex items-center space-x-4">
            <a
              href="#"
              aria-current="page"
              className=" text-2xl hover:text-red-400 transition duration-300"
            >
              Home
            </a>
            <button
              href="#"
              aria-current="page"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Signup
            </button>
            <a
              href="#"
              aria-current="page"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Signin
            </a>
            <a
              href="#"
              aria-current="page"
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </a>
            <a href="#" aria-current="page">
              <FiUser className="inline  text-3xl" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
