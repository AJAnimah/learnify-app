import HeroImage from "../assets/hero-image.png"; // Import the image

function HeroSection() {
  return (
    <section className="bg-[#01589A] text-white py-20 px-6 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Unlock Your Potential with Industry-Leading Courses!
          </h1>
          <p className="text-lg mt-4 md:mt-6">
          Join thousands of learners gaining real-world skills and advancing their careers. Our expert-led courses are designed to empower you to succeed.
          </p>
          <button className="mt-6 bg-[#01589A] text-white border border-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md transition duration-300 hover:bg-[#E6EFF5] hover:text-[#01589A]">
            Get Started
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src={HeroImage} // Use the imported image
            alt="Learning"
            className="w-full max-w-lg mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
