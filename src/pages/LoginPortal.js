import React from "react";

function LoginPortal() {
  return (
    <div className="flex justify-center items-center h-screen bg-white-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="/logo-intern.png" // Replace with your logo path
            alt="Internee.pk Logo"
            className="mx-auto w-24"
          />
          <h2 className="text-2xl font-bold text-green-600 mt-2">
            Internee.pk
          </h2>
          <p className="text-sm text-gray-500">
            VIRTUAL INTERNSHIP PLATFORM
          </p>
        </div>
        {/* Login Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-green-300 focus:outline-none"
            />
            <span className="absolute right-4 top-3 text-gray-400">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-green-300 focus:outline-none"
            />
            <span className="absolute right-4 top-3 text-gray-400">
              <i className="fas fa-eye-slash"></i>
            </span>
          </div>
          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span>Remember Me</span>
            </label>
            <a href="#" className="text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPortal;
