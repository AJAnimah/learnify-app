// import HeroSection from "../components/HeroSection";

// function Home() {
//   return (
//     <div>
//       <HeroSection />
//     </div>
//   );
// }

// export default Home;

// src/pages/Home.jsx
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CourseList from "../components/CourseList";
import TechStack from "../components/TechStack";
import RegisterSection from "../components/RegisterSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="container mx-auto p-4">
        <CourseList />
      </div>
      <TechStack />
      <RegisterSection />
      <Footer />
    </div>
  );
}
  