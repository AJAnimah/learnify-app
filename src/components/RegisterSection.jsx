import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bar from "../assets/bar.png";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot,
  faDollarSign,
  faImage,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function RegisterSection() {
  return (
    <div className="bg-white">
      {/* Container with side margins and gap */}
      <div className="mr-[202px] mt-[54px] grid grid-cols-1 lg:grid-cols-2 ">
        
        {/* Left Side Content */}
        <div className="mt-[130px] ml-[202px] flex">
          {/* Bar Image */}
          <img src={bar} alt="Bar Bullet" className="w-[32px] h-[343px] mt-[20px]" />
          {/* Content */}
          <div className="ml-[24px]">
            {["Sign Up and Choose Your Course", "Onboarding", "Start Learning"].map((title, index) => (
              <div key={index} className="py-[24px] w-[266px]">
                <h1 className="text-base font-extrabold mb-2">{title}</h1>
                <p className="text-black">
                  Create your account quickly with just your email or social media login, then explore a wide range.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="bg-white">
          <h2 className="text-center text-3xl font-bold mb-12">Register</h2>
          <form className="w-[598px] h-[834px] space-y-6">
            
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[66px]">
              {["First Name", "Last Name"].map((placeholder, index) => (
                <div key={index} className="relative">
                  <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl font-thin" />
                  <input type="text" placeholder={placeholder} className="w-full h-[40px] p-3 pl-10 border rounded-sm bg-[#F5F5F5] placeholder-[#999999]" required />
                </div>
              ))}
            </div>

            {/* Email & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[66px]">
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="email" placeholder="Email" className="w-full h-[40px] p-3 pl-10 border rounded-sm bg-[#F5F5F5] placeholder-[#999999]" required />
              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faLocationDot} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Location" className="w-full h-[40px] p-3 pl-10 border rounded-sm bg-[#F5F5F5] placeholder-[#999999]" required />
              </div>
            </div>

            {/* Choose Module & Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[66px]">
              {[
                { placeholder: "Choose Module", options: ["Frontend", "Backend", "Full Stack"] },
                { placeholder: "Gender", options: ["Male", "Female", "Other"] }
              ].map(({ placeholder, options }, index) => (
                <div key={index} className="relative">
                  <select className="w-full h-[40px] p-2 pl-3 pr-8 border rounded-sm bg-[#F5F5F5] text-gray-700 appearance-none">
                    <option>{placeholder}</option>
                    {options.map((option, i) => <option key={i}>{option}</option>)}
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Disabled & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[66px]">
              <div className="relative">
                <select className="w-full h-[40px] p-2 pl-3 pr-8 border rounded-sm bg-[#F5F5F5] text-gray-700 appearance-none">
                  <option>Disabled</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Phone" className="w-full h-[40px] p-3 pl-10 border rounded-sm bg-[#F5F5F5] placeholder-[#999999]" required />
              </div>
            </div>

            {/* Upload Image */}
            <div className="relative">
              <FontAwesomeIcon icon={faImage} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="file"
                className="w-full h-[64px] p-3 pl-10 border rounded-sm bg-[#F5F5F5] placeholder-[#999999]"
                placeholder="Upload Image"
              />
            </div>

            {/* Amount */}
            <div className="relative">
              <FontAwesomeIcon icon={faDollarSign} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Amount" className="w-full h-[40px] p-3 pl-10 border rounded-sm bg-[#F5F5F5] placeholder-[#999999]" required />
            </div>

            {/* Description */}
            <textarea placeholder="Description" className="w-full h-[144px] p-3 border rounded-sm bg-[#F5F5F5] placeholder-[#999999]" rows="4"></textarea>

            {/* Submit Button */}
            <button type="submit" className="w-full h-[48px] bg-[#01589A] text-base text-white px-6 py-3 rounded-sm hover:bg-blue-600">
              Register
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}