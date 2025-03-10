// src/components/HeroSection.jsx
import HeroImage from "../assets/hero-image.png"; // Import the image

export default function HeroSection() {
  return (
    <section className="bg-[#01589A] text-white py-20 text-center md:text-left px-[201px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center mt-20">
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h3 className="text-[20px] leading-[28px] md:text-[40px] md:leading-[48px] font-bold flex-1">
          Unlock Your Potential with Industry-Leading Courses!
          </h3>
          <p className="text-base font-normal mt-4 md:mt-6">
          Join thousands of learners gaining real-world skills and advancing their careers. Our expert-led courses are designed to empower you to succeed.
          </p>
          <button className="mt-6 bg-[#01589A] text-white border border-white px-6 py-3 rounded-lg font-semibold text-base shadow-md transition duration-300 hover:bg-[#E6EFF5] hover:text-[#01589A]">
            Get Started
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={HeroImage} // Use the imported image
            alt="Learning"
            className="w-full max-w-lg mx-auto md:mx-0 mt-8 md:mt-0" 
          />
        </div>
      </div>
    </section>
  );
}



