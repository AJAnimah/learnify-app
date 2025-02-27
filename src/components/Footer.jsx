import GClient from "../assets/azubi-logo2.png"; // Replace with the correct path to your G-client image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#01589A] text-white p-6">
      <div className="container mx-auto">
        {/* Top Section: G-client Image and 3 Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Left Side: G-client Image */}
          <div className="w-[385.1px] h-[110px] mt-[40px] ml-[202px]">
            <img
              src={GClient}
              alt="G-client Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Side: 3 Columns (Menu, Contact, Social) */}
          <div className="flex flex-col lg:flex-row gap-[16px] mt-[40px] mr-[202px]">
            {/* Menu Column */}
            <div className="flex flex-col gap-[14px]">
              <h3 className="text-lg font-bold">Menu</h3>
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Courses
              </a>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-[14px]">
              <h3 className="text-lg font-bold">Contact</h3>
              <p>+233 2400 0000</p>
              <p>New Reiss, Ghana, Accra</p>
            </div>

            {/* Social Column */}
            <div className="flex flex-col gap-[14px]">
              <h3 className="text-lg font-bold">Social</h3>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white w-[calc(100%-380px)] my-6 mx-auto"></div>

        {/* Bottom Section: Copyright and Back to Top */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Copyright Information */}
          <p className="text-sm ml-[190px]">© Copyright 2025 - G-client, All rights reserved</p>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:underline mr-[190px]"
          >
            <span>Back to Top</span>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </footer>
  );
}