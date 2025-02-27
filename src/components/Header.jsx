import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/azubi-logo.png";
import AuthPopup from "./AuthPopup"; // Import the new component

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login & signup

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

        {/* Login Button - Toggles the AuthPopup */}
        <div className="relative">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="bg-white border border-[#01589A] text-[#01589A] px-6 py-2 rounded-lg font-semibold text-lg shadow-md transition duration-300 hover:bg-[#014273] hover:text-[#E6EFF5] flex items-center"
          >
            Login <span className="ml-2">→</span>
          </button>

          {showPopup && <AuthPopup isLogin={isLogin} setIsLogin={setIsLogin} onClose={() => setShowPopup(false)} />}
        </div>
      </div>
    </header>
  );
}
