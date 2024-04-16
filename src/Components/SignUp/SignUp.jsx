import React, { useState } from "react";
import "./signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function SignUp() {
  const navigateToSignIn = useNavigate();
  const existEmail = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [userCredential, setUserCredential] = useState(null); // State to store user credentials

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUserCredential(userCredential); // Set userCredential state
      // User created successfully
      const user = userCredential.user;
      console.log("User created:", user);
      localStorage.setItem("Token", user.accessToken);
      navigateToSignIn("/Login");
    } catch (error) {
      // Handle errors here
      console.error("Error creating user:", error.message);
      // Show confirmation dialog if email already exists
      const confirmExists = window.confirm(
        "Email is already in use. Do you want to create another one?"
      );
      // If user confirms, navigate to the sign-in page
      if (confirmExists) {
        existEmail("/");
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
        <form action="" id="Signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name-input"
            required
            placeholder="Name"
            name="name"
          />
          <input
            type="email"
            id="email-input"
            placeholder="Enter your email"
            name="email"
            required
          />
          <input
            type="password"
            id="password-input"
            placeholder="Password"
            name="password"
            required
          />
          <div id="div-4">
            <button type="submit" id="Signup-button">
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
            <p id="text-2">
              Already have an account?
              <NavLink to="/Login" id="link-2">
                Login
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
