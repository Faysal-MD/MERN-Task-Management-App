const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center p-4 mx-auto max-w-screen-lg">
        <p className="text-6xl font-semibold">
          <span className="text-orange-500">Organize</span> your <br /> work and life, finally
        </p>
        <p className="text-xl text-gray-600">
          Become organized, focused, and calm with <br />
          task management app.
        </p>
        <button className="my-2 text-2xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Create Task
        </button>
      </div>
    </div>
  );
};

export default Home;
