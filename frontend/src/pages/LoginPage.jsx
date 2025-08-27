
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Logo / Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">CHAT-APP</h1>

      {/* Login Card */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Extra Links */}
          <div className="mt-4 border-t pt-4">
            <Link to="/signup" className="btn btn-success w-full">
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default LoginPage;
