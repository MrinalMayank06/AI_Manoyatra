import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Login = () => {
  const [state, setState] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const { login } = useContext(AppContext);

  const handleDemoLogin = () => {
    setEmail("demo@manoyatra.com");
    setPassword("0000");
    setName("Demo User");
    setError("");
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (password === "0000") {
        const userData = {
          name: name || "Demo User",
          email,
          image: assets.profile_pic
        };
        
        login(userData);
        
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 300);
      } else {
        setError("Use password '0000' for demo access");
      }
    } catch (err) {
      setError("Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={assets.logo} alt="Manoyatra" className="w-44 mx-auto mb-6 brightness-0 invert" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {state === "signup" ? "Begin Your Journey" : "Welcome Back"}
          </h2>
          <p className="text-blue-200 text-sm md:text-base">
            {state === "signup" 
              ? "Your mental wellness journey starts here" 
              : "Continue where you left off"}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
          {error && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={onSubmitHandler} className="space-y-5">
            {state === "signup" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                placeholder="Enter password (demo: 0000)"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 text-sm"
            >
              {loading ? "Please wait..." : state === "signup" ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="mt-4">
            <button
              onClick={handleDemoLogin}
              className="w-full border-2 border-blue-100 text-blue-600 font-medium py-3 rounded-xl hover:bg-blue-50 transition-all text-sm"
            >
              Try Demo Account
            </button>
          </div>

          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">
              {state === "signup"
                ? "Already have an account?"
                : "New to Manoyatra?"}{" "}
              <button
                onClick={() => {
                  setState(state === "signup" ? "login" : "signup");
                  setError("");
                }}
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {state === "signup" ? "Sign In" : "Create Account"}
              </button>
            </p>
          </div>
        </div>

        <p className="text-center text-blue-200/60 text-xs mt-6">
          Protected by secure authentication. Your data is encrypted and private.
        </p>
      </div>
    </div>
  )
}

export default Login;
