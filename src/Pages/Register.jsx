// Register.jsx
import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createAccount } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;

    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);

    if (!isValidPassword) {
      toast.error("Password must have an uppercase, lowercase, and be at least 6 characters long.");
      return;
    }


    // Your Firebase register function goes here
     createAccount(email, password, name, photoURL)
            .then((user) => {
                toast.success("User created successfully!");
                console.log("User created:", user);

                navigate('/');
            })
            .catch((error) => {
                console.error(error.message);
                toast.error(error.message);
            });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="photo"
            required
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
        <SocialLogin></SocialLogin>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
