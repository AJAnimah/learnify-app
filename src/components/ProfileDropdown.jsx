import { useState } from "react";
import { Link } from "react-router-dom";


export default function ProfileDropdown({userEmail, handleLogout}) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 hover:text-[#01589A]"
      >
        <span>{userEmail}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Settings
          </Link>
          <button
            onClick={  handleLogout}

            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

