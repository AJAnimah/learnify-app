import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/azubi-logo.png";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowForward } from "react-icons/io";
import GClient from "../assets/azubi-logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import dashboardIcon from "../assets/dashboard-icon.png";

export default function Dashboard() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white text-black flex justify-between fixed top-0 w-full z-10 px-[201px] items-center p-4">
        <div className="text-xl font-bold">
          <Link to="/">
            <img src={logo} alt="Client Logo" className="h-8" />
          </Link>
        </div>
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center space-x-2"
          >
            <FaUserCircle size={24} />
            <span>John Doe</span>
            <IoMdArrowDropdown />
          </button>
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md w-32">
              <ul>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Profile</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Dashboard</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#01589A] w-auto h-[201px] flex items-center space-x-3 p-6 mt-[28px] mx-auto">
        <img src={dashboardIcon} alt="Dashboard Icon" className="w-12 h-12 ml-[170px]" />
        <h1 className="md:text-[40px] md:leading-[48px] font-bold text-white">Dashboard</h1>
      </section>

      {/* Application Profile */}
<div className="bg-white p-12 mx-[201px] w-auto h-[569px] mt-[-68px]">
  <h2 className="text-xl font-semibold mb-6">
    Application <span className="text-xl font-normal">Profile</span>
  </h2>
  <table className="w-1/2 overflow-auto whitespace-nowrap border-collapse">
    <thead>
      <tr className="bg-white">
        <th className="text-left text-[#999999] border-r border-gray-300 px-4 py-2">
          Program
        </th>
        <th className="text-left text-[#999999] border-r border-gray-300 px-4 py-2">
          Date Registered
        </th>
        <th className="text-left text-[#999999] border-r border-gray-300 px-4 py-2">
          Status
        </th>
        <th className="text-left text-[#999999] px-3 py-2">Paid</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border-r border-gray-300 px-4 py-2">Data Science</td>
        <td className="border-r border-gray-300 px-4 py-2">2024/11/16</td>
        <td className="border-r border-gray-300 px-4 py-2">Registered</td>
        <td className="px-3 py-2">$150.00</td>
      </tr>
    </tbody>
  </table>



        {/* Divider Line */}
        <div className="border-t border-gray-300 my-10"></div>

        {/* Tool Buttons */}
        <div className="mt-4 flex space-x-4">
          <button className="border border-[#E6E6E6] text-[#01589A] px-4 py-2 rounded">PowerBI</button>
          <button className="border border-[#28ACE2] text-[#01589A] px-4 py-2 rounded">Python</button>
        <button className="border border-[#77C053] text-[#01589A] px-4 py-2 rounded">Excel</button>
          <button className="border border-[#A61D24] text-[#01589A] px-4 py-2 rounded">Tableau</button>
        </div>

        {/* New Buttons */}
        <div className="mt-12 flex space-x-4">
          <button className="bg-[#E6E6E6] text-black px-4 py-2 rounded flex items-center">
            Home <IoMdArrowForward className="ml-2" />
          </button>
          <button className="bg-[#01589A] text-white px-4 py-2 rounded flex items-center">
            Start New Application <IoMdArrowForward className="ml-2" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#01589A] text-white p-6">
        <div className="container w-auto h-[281px]">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-[385.1px] h-[110px] mt-[40px] ml-[202px]">
              <img src={GClient} alt="G-client Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col lg:flex-row gap-[16px] mt-[40px] mr-[202px]">
              <div className="flex flex-col gap-[14px]">
                <h3 className="text-lg font-bold">Contact</h3>
                <p>+233 2400 0000</p>
                <p>New Reiss, Ghana, Accra</p>
              </div>
              <div className="flex flex-col gap-[14px]">
                <h3 className="text-lg font-bold">Social</h3>
                <a href="#" className="hover:underline">LinkedIn</a>
                <a href="#" className="hover:underline">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white w-[calc(100%-380px)] my-6 mx-auto"></div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm ml-[190px]">© Copyright 2025 - G-client, All rights reserved</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 hover:underline mr-[190px]">
              <span>Back to Top</span>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
