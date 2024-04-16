import React, { useState } from "react";
import "./signin.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function SignIn() {
  const navigateToHome = useNavigate();

  const navToHome = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
      // Navigate to home page upon successful sign-in
      navigateToHome("/Home");
    } catch (error) {
      // Handle errors here
      console.error("Error signing in:", error.message);

      const confirmExists = window.confirm("Email or Password is Invalid.");
      // If user confirms, navigate to the Home page
      if (confirmExists) {
        navToHome("/Login");
        // Refresh the page after navigation
        window.location.reload();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div id="div-1">
        <form action="" id="SignIn-form" onSubmit={handleSubmit}>
          {/* Include inputs for email and password */}
          {/* Adjust input types and placeholders as needed */}
          <input
            type="email"
            id="email-input"
            placeholder="Enter your email"
            name="email"
          />
          <input
            type="password"
            id="password-input"
            placeholder="Password"
            name="password"
          />
          <div id="sign-div">
            <NavLink id="link-1">Forget Password?</NavLink>
            <button type="submit" id="SignIn-button">
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
          <p id="text-p1">
            Don't have an account?
            <NavLink id="link-4" to="/">
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
