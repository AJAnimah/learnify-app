// src/components/Header.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/azubi-logo.png";
import AuthPopup from "./AuthPopup";
import ProfileDropdown from "./ProfileDropdown";
import { login, logout } from "../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [userName, setUserName] = useState(""); // Initialize with an empty string
  const navigate = useNavigate();

  // Handle login
  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.token); // Store token
      setUserName(response.user.username); // Set the user's name from the API response
      setIsLoggedIn(true);
      toast.success("Login successful!");
      navigate("/learner"); // Redirect to learner's page
    } catch (error) {
      toast.error(error.message || "Login failed");
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout(localStorage.getItem("token"));
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setUserName(""); // Clear the user's name
      toast.success("Logged out successfully!");
      navigate("/"); // Redirect to home page
    } catch (error) {
      toast.error(error.message || "Logout failed");
    }
  };

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 w-full z-10 px-[201px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img src={logo} alt="Client Logo" className="h-8" />
          </Link>

          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#01589A]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-[#01589A]">
                  Courses
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Show Login Button or Profile Dropdown */}
        {!isLoggedIn ? (
          <div className="relative">
            <button
              onClick={() => setShowPopup(!showPopup)}
              className="bg-white border border-[#01589A] text-[#01589A] px-6 py-2 rounded-lg font-semibold text-lg shadow-md transition duration-300 hover:bg-[#014273] hover:text-[#E6EFF5] flex items-center"
            >
              Login <span className="ml-2">→</span>
            </button>

            {showPopup && (
              <AuthPopup
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                onClose={() => setShowPopup(false)}
                onLogin={handleLogin} // Pass login handler
              />
            )}
          </div>
        ) : (
          <ProfileDropdown userName={userName} onLogout={handleLogout} />
        )}
      </div>
    </header>
  );
}