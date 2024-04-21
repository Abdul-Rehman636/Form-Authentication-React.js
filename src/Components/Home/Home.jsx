import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Home() {
  const navToRedirect = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(alert("Do you really want to sign out?"))
      .then(localStorage.removeItem("Token"))
      .then(navToRedirect("/"));
  };

  return (
    <>
      <div id="home">
        <h1 id="text-1">Welcome to Home</h1>
        <button onClick={logOut} id="Logout-button">
          Logout
        </button>
      </div>
    </>
  );
}

export default Home;
