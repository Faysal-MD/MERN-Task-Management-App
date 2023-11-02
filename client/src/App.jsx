import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
import Task from "./components/task/Task";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/logout" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
