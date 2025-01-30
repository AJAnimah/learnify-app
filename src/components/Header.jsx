import { Link } from "react-router-dom";
import logo from "../assets/azubi-logo.png"; // Update the path to your logo

function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo & Navigation */}
        <div className="flex items-center space-x-8">
          {/* Company Logo */}
          <Link to="/">
            <img src={logo} alt="Client Logo" className="h-8" />
          </Link>

          {/* Navigation */}
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

        {/* Right Side - Login Button */}
        <div>
          <Link to="/login">
            <button className="bg-[#01589A] text-white border border-white px-6 py-2 rounded-lg font-semibold text-lg shadow-md transition duration-300 hover:bg-[#E6EFF5] hover:text-[#01589A] flex items-center">
              Login <span className="ml-2">→</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
