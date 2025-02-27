import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // For navigation
import googleIcon from "../assets/google-icon.png"; // Import the Google icon PNG

export default function AuthPopup({ isLogin, setIsLogin, onClose }) {
  const popupRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle confirm password visibility
  const navigate = useNavigate(); // For redirecting after login/signup

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login/signup
    if (isLogin) {
      console.log("Login successful");
      navigate("/learner"); // Redirect to learner's page
    } else {
      console.log("Signup successful");
      navigate("/learner-dashboard"); // Redirect to learner's dashboard
    }
    onClose(); // Close the popup
  };

  return (
    <div className="absolute right-0 mt-4 w-80 bg-white border border-[#01589A] shadow-lg rounded-[4px] p-6" ref={popupRef}>
      {/* Heading */}
      <h2 className="md:text-[40px] md:leading-[48px] font-bold text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h2>

      {/* "Log in using Google or" or "Signup using Google or" */}
      <div className="text-sm text-[#01589A] font-bold text-center mb-4">
        <div className="flex items-center justify-center">
          <img src={googleIcon} alt="Google Icon" className="w-6 h-6 mr-2" /> {/* Google icon PNG */}
          {isLogin ? "Log in using Google" : "Signup using Google"}
        </div>
        <p className="mt-2">or</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 pl-10 border rounded"
              required
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-3 text-gray-400"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 pl-10 border rounded"
              required
            />
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 top-3 text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          {isLogin && (
            <p className="text-sm text-[#01589A] mt-1">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </p>
          )}
        </div>

        {/* Confirm Password (only for signup) */}
        {!isLogin && (
          <div className="mb-4">
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-2 pl-10 border rounded"
                required
              />
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-3 top-3 text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#01589A] text-white p-2 rounded"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      {/* Toggle between Login and Signup */}
      <p className="mt-4 text-center text-sm text-gray-600">
        {isLogin ? "Need to create an account? " : "Already have an account? "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-[#01589A] underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

// Add PropTypes validation
AuthPopup.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  setIsLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};