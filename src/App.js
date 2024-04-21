import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SignIn from "./Components/SignIn/SignIn";
import { useState } from "react";

function App(props) {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<SignIn />} />
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

export const PrivateRoute = ({ children }) => {
  const getToken = localStorage.getItem("Token");
  if (getToken) {
    return children;
  } else {
    return Navigate("/Login");
  }
};
