import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    // Password must have at least:
    // - 8 characters
    // - One uppercase letter
    // - One number
    // - One special character
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!validatePassword(password)) {
      setError(
        "Password must contain at least 8 characters, one uppercase letter, one number, and one special character."
      );
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/InterneePage", { state: { email } }); // Pass email to Dashboard
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex h-full w-full justify-center bg-white-100">
      <div className="flex w-screen h-screen bg-white rounded-lg shadow-lg">
        <div className="flex-1 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
          <div className="text-center">
            <img
              src="/people-working-computer.png"
              alt="Illustration"
              className="w-64 mx-auto"
            />
            <h1 className="text-white text-2xl font-bold mt-4">
              Welcome Back!
            </h1>
            <p className="text-white mt-2 text-sm">
              Please sign in to continue to Internee.pk
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
          <div className="w-full max-w-sm">
            <div className="text-center mb-6">
              <img
                src="/logo-intern.png"
                alt="Internee.pk Logo"
                className="mx-auto w-20"
              />
              <h2 className="text-2xl font-bold text-green-600 mt-2">
                Internee.pk
              </h2>
              <p className="text-sm text-gray-500">
                VIRTUAL INTERNSHIP PLATFORM
              </p>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring focus:ring-green-300 focus:outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring focus:ring-green-300 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPortal;
