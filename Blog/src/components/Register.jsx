import React, { useState, useEffect } from "react";
import useRegister from "../hooks/userAuth/useRegister";
import { Link, useNavigate } from "react-router-dom";
import { authStore } from "../api/authStore";
import { toast } from "react-toastify";

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const setTokens = authStore((store) => store.setTokens);
  const accessToken = authStore((store) => store.accessToken);
  const { mutate } = useRegister();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/home");
    }
  }, [accessToken, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: (data) => {
        setTokens(data.access, data.refresh);
        toast.success(" Registration Successful");
      },
      onError: (error) => {
        console.log(" Backend Error:", error);

        const emailError = error?.email?.[0];
        const usernameError = error?.username?.[0];
        const generalError = error?.detail || "Registration failed";

        toast.error(emailError || usernameError || generalError);
      },
    });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 text-gray-600">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg relative">
        <h2 className="text-2xl mb-4 font-semibold text-center">Register</h2>

        <form onSubmit={handleRegister}>
          <div className="pb-6">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="w-full p-2 border rounded mt-2"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="pb-6">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full p-2 border rounded mt-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="pb-6">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-2 border rounded mt-2"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
