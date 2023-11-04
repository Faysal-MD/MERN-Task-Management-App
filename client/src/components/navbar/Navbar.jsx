import { AiOutlineSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };

  return (
    <div>
      <nav className="p-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 text-red-600">
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

            {!isLoggedIn && (
              <>
                <Link
                  to="/signup"
                  aria-current="page"
                  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Signup
                </Link>
                <Link
                  to="/signin"
                  aria-current="page"
                  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Signin
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <Link
                  to="/logout"
                  aria-current="page"
                  className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={logout}
                >
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
