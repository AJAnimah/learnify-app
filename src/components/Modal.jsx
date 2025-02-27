// import PropTypes from "prop-types";
// import { useState } from "react";
// import { GoogleLogin } from "react-google-login"; // For Google authentication

// export default function AuthModal({ isOpen, onClose }) {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

//   const handleGoogleSuccess = (response) => {
//     console.log("Google login success:", response);
//     // Handle Google login/signup logic here
//   };

//   const handleGoogleFailure = (error) => {
//     console.log("Google login failure:", error);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg w-96 relative">
//         <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">
//           ×
//         </button>

//         <h2 className="text-2xl font-bold mb-6">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>

//         {/* Login/Signup Form */}
//         {isLogin ? (
//           <form>
//             <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
//             <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
//             <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//               Login
//             </button>
//           </form>
//         ) : (
//           <form>
//             <input type="text" placeholder="Full Name" className="w-full p-2 mb-4 border rounded" />
//             <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
//             <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
//             <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//               Sign Up
//             </button>
//           </form>
//         )}

//         {/* Google Login/Signup Button */}
//         <div className="mt-4">
//           <GoogleLogin
//             clientId="YOUR_GOOGLE_CLIENT_ID"
//             buttonText={isLogin ? "Login with Google" : "Sign up with Google"}
//             onSuccess={handleGoogleSuccess}
//             onFailure={handleGoogleFailure}
//             cookiePolicy={"single_host_origin"}
//             className="w-full"
//           />
//         </div>

//         {/* Toggle between Login and Signup */}
//         <p className="mt-4 text-center">
//           {isLogin ? "Need an account? " : "Already have an account? "}
//           <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 underline">
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// // Add PropTypes for props validation
// AuthModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
