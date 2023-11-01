import { AiOutlineSchedule } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="p-4 mx-auto max-w-screen-lg">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 text-red-600"
          >
            <div className="text-4xl">
              <AiOutlineSchedule />
            </div>
            <div className="text-3xl font-bold">task</div>
          </Link>
          <div className="ml-auto flex items-center space-x-4">
            <Link
              to="/"
              aria-current="page"
              className=" text-2xl hover:text-red-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/task"
              aria-current="page"
              className=" text-2xl hover:text-red-400 transition duration-300"
            >
              Task
            </Link>
            <Link
              to="/signup"
              // aria-current="page"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Signup
            </Link>
            <Link
              to="/signin"
              // aria-current="page"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Signin
            </Link>
            <Link
              to="/logout"
              aria-current="page"
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </Link>
            <Link to="#" aria-current="page">
              <FiUser className="inline  text-3xl" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
