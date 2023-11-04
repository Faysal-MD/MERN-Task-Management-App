import HeadingComp from "./HeadingComp";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/signin", Inputs)
      .then((response) => {
        sessionStorage.setItem("id", response.data.others._id);
        dispatch(authActions.login());
        history("/task");
      });
  };


  return (
    <div className="w-full my-10 flex justify-center items-center">
      <div className="text-center p-4 mx-auto max-w-screen-lg">
        <div className="bg-white p-4 rounded-lg shadow-md w-96">
          <HeadingComp first="Sign" second="In" />
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
                value={Inputs.email}
                onChange={change}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
                value={Inputs.password}
                onChange={change}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              onClick={submit}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
