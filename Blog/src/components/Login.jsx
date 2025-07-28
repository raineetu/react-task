import React, { useState } from "react";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 text-gray-600">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg relative">
        <button
          className="absolute top-2 right-3 text-xl text-gray-600 cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl mb-4 font-semibold text-center ">Login</h2>
        <div className="pb-6 ">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pb-6 ">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 ">
          <button
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
