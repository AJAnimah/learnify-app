import CourseCard from "./CourseCard";
import Icon1 from "../assets/Frame 141.png"; // Icon for Software Development
import Icon2 from "../assets/Frame 144.png"; // Icon for Data Science
import Icon3 from "../assets/Frame 145.png"; // Icon for Cloud Computing

export default function CourseList() {
  const courses = [
    {
      icon: Icon1, 
      title: "Software Development",
      description:
        "Unlock your potential with comprehensive training in modern software development, from coding fundamentals to building complex applications.",
      price: 350,
    },
    {
      icon: Icon2,
      title: "Data Science Mastery",
      description:
        "Equip yourself with the skills to analyze, interpret, and leverage data, becoming an expert in machine learning, AI, and data-driven decision-making.",
      price: 300,
    },
    {
      icon: Icon3, 
      title: "Cloud Computing Expertise",
      description:
        "Gain hands-on experience in cloud architecture and deployment, preparing you to design, implement, and manage scalable cloud solutions.",
      price: 500,
    },
  ];

  return (
    <div className="mt-14"> {/* Add margin-top to separate from HeroSection */}
      {/* Title and Subtitle */}
      <h2 className="md:text-[40px] md:leading-[48px] font-bold text-center mb-4">Our Solutions</h2>
      <p className="text-base text-gray-600 text-center mb-8">
        Create your account quickly with just your email or social media login, then explore a wide
        range.
      </p>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] px-[201px]">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            icon={course.icon}
            title={course.title}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
}
