import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
