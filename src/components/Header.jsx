import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/azubi-logo.png";
import AuthPopup from "./AuthPopup";
import ProfileDropdown from "./ProfileDropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userEmail")); // Check if user is logged in
  const [userEmail, setUserEmail] = useState(""); // Initialize with an empty string
  const navigate = useNavigate();


  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // Clear useremail data
      setIsLoggedIn(false); // Update login state
      setUserEmail(""); // Clear the user's name

      // Show success message
      toast.success("Logged out successfully!");

      // Redirect to the home page
      navigate("/"); // Redirect to home page
    
  };

  useEffect(() =>{
    if(isLoggedIn){
      setUserEmail(localStorage.getItem("userEmail"))
    } else{
      setUserEmail("")
    }
    
  },[isLoggedIn])

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
                setIsLoggedIn={setIsLoggedIn}
                onClose={() => setShowPopup(false)} // Pass onClose function
               
              />
            )}
          </div>
        ) : (
          <ProfileDropdown userEmail={userEmail} handleLogout={handleLogout} />
        )}
      </div>
    </header>
  );
}
