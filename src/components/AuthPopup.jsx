// src/components/AuthPopup.js
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import googleIcon from "../assets/google-icon.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signup, login } from "../api/api";

export default function AuthPopup({ setIsLoggedIn, onClose }) {
  const popupRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();


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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!isRegistering) {
        // Login
        const response = await login(email, password);
        localStorage.setItem("userEmail", response.user.email); // Store useremail
        setIsLoggedIn(true)
        toast.success("Login successful!");
        navigate("/"); // Redirect to homepage
      } else {
        
        // Signup
        const response = await signup(email, password); // Use email as username
        localStorage.setItem("userEmail", response.user.email); // Store useremail
        setIsLoggedIn(true)
        toast.success("Signup successful!");
        navigate("/"); // Redirect to homepage
      }
      onClose(); // Close the popup
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute right-0 mt-4 w-80 bg-white border border-[#01589A] shadow-lg rounded-[4px] p-6" ref={popupRef}>
      {/* Heading */}
      <h2 className="md:text-[40px] md:leading-[48px] font-bold text-center mb-4">{!isRegistering ? "Login" : "Sign Up"}</h2>

      {/* "Log in using Google or" or "Signup using Google or" */}
      <div className="text-sm text-[#01589A] font-bold text-center mb-4">
        <div className="flex items-center justify-center">
          <img src={googleIcon} alt="Google Icon" className="w-6 h-6 mr-2" />
          {!isRegistering ? "Log in using Google" : "Signup using Google"}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          {!isRegistering && (
            <p className="text-sm text-[#01589A] mt-1">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </p>
          )}
        </div>

        {/* Confirm Password (only for signup) */}
        {isRegistering && (
          <div className="mb-4">
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : !isRegistering ? "Login" : "Sign Up"}
        </button>
      </form>

      {/* Toggle between Login and Signup */}
      <p className="mt-4 text-center text-sm text-gray-600">
        {!isRegistering ? "Need to create an account? " : "Already have an account? "}
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-[#01589A] underline"
        >
          {!isRegistering ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

