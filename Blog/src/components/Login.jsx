import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authStore } from "../api/authStore";
import { toast } from "react-toastify";
import useLogin from "../hooks/userAuth/useLogin";

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const setTokens = authStore((store) => store.setTokens);
  const accessToken = authStore((store) => store.accessToken);
  const { mutate } = useLogin();
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

  const handleLogin = (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: (data) => {
        setTokens(data.access, data.refresh);
        toast.success("Login Successful");
        navigate("/home");
      },
      onError: (error) => {
        toast.error("Invalid login ", error);
      },
    });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 text-gray-600">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg relative">
        <h2 className="text-2xl mb-4 font-semibold text-center">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="pb-6">
            <label>Username or Email</label>
            <input
              type="text"
              name="identifier"
              placeholder="Enter Username or Email"
              className="w-full p-2 border rounded mt-2"
              value={formData.identifier}
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
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
