
export default function TechStack() {
  const technologies = [
    "ReactJs",
    "NextJs",
    "NodeJs",
    "Django",
    "MongoDB",
    "VueJs",
    "PowerBI",
    "Python",
    "Excel",
    "Tableau",
    "AWS",
    "Azure",
  ];

  const borderColors = ["#E6E6E6", "#28ACE2", "#77C053", "#A61D24", "#D89614", "#999999"];

  return (
    <div className="bg-[#01589A] py-12 mt-14">
      <div className="container mx-auto text-center">
        <h2 className="text-[40px] font-bold text-white mb-4">What will be your next step?</h2>
        <p className="text-base text-white font-normal mb-8 w-full max-w-md mx-auto text-center">
          Discover our diverse stack of solutions, including software development, data science, and
          cloud tools. Sign up today and kickstart your journey!
        </p>

        {/* TechStack Buttons */}
        
        <div
        className="grid grid-cols-6 gap-x-2 gap-y-4 max-w-[700px] mx-auto">
          {technologies.map((tech, index) => (
            <button
              key={index}
              className="w-[100px] h-[48px] bg-[#01589A] text-white text-sm font-normal flex items-center justify-center rounded-lg border-[1px] transition-shadow shadow-md hover:shadow-lg"
              style={{ borderColor: borderColors[index % borderColors.length] }}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
