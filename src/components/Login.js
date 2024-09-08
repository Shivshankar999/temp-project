import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; // Import the AuthContext
import { cheakValidData } from "../utils/validate"; // Assuming you have validation logic here

const Login = () => {
  const { login } = useContext(AuthContext); // Access login function from AuthContext
  const [errorMessage, setErrorMessage] = useState(null);
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate(); // Used for navigation after login

  const handleButtonClick = () => {
    const usernameValue = username.current.value;
    const passwordValue = password.current.value;

    // You can add any validation logic here if necessary
    if (cheakValidData(usernameValue) && cheakValidData(passwordValue)) {
      const isAuthenticated = login(usernameValue, passwordValue); // Call login from context
      if (isAuthenticated) {
        // Redirect to dashboard or another page upon successful login
        navigate("/dashboard");
      } else {
        setErrorMessage("Invalid username or password");
      }
    } else {
      setErrorMessage("Please enter valid data");
    }
  };

  return (
    <div className="bg-slate-400 h-[300px] w-[400px] m-auto">
      <form
        className="m-10 items-center p-10"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form submission
        }}
      >
        <p className="font-bold">Username</p>
        <input
          ref={username}
          className="border p-2 border-black"
          type="text"
          placeholder="Username"
        />
        <p className="font-bold">Password</p>
        <input
          ref={password}
          className="border p-2 border-black"
          type="password"
          placeholder="Password"
        />
        <br />
        {errorMessage && (
          <p className="text-red-600 font-bold">{errorMessage}</p>
        )}
        <button
          className="p-3 m-3 border bg-black text-white rounded-lg"
          onClick={handleButtonClick}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
