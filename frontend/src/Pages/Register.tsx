// src/components/Register.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, admin }),
      });

      if (response.ok) {
        setEmail("");
        setPassword("");
        setName("");
        setAdmin(false);
        alert("Registration successful!");
        navigate("/");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              id="jobPoster"
              type="checkbox"
              checked={admin}
              onChange={() => setAdmin(!admin)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="jobPoster"
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              Are you a job poster?
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register
          </button>
          <div className="mt-4 flex justify-center">
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Go to Login Page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
