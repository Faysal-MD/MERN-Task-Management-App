import HeadingComp from "./HeadingComp";

const Signup = () => {
  return (
    <div className="w-full my-10 flex justify-center items-center">
      <div className="text-center p-4 mx-auto max-w-screen-lg">
        <div className="bg-white p-4 rounded-lg shadow-md w-96">
          <HeadingComp first="Sign" second="Up" />
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
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
              />
            </div>

            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
