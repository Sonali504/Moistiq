import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back! 💄</h2>
        <p className="text-gray-500 text-center mb-5">Login to continue shopping</p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label className="block text-gray-700 font-semibold">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="button"
            className="absolute right-3 top-10 text-gray-600"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-4">
          <Link to="/forgot-password" className="text-sm text-pink-500 hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          <button className="flex items-center justify-center w-1/2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            <FaGoogle className="text-red-500 mr-2" /> Google
          </button>
          <button className="flex items-center justify-center w-1/2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            <FaFacebook className="text-blue-600 mr-2" /> Facebook
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-pink-500 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
