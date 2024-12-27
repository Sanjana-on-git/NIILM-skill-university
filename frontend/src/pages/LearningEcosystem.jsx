

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeGallerySection from "../components/homepage/home-gallery/HomeGallerySection";
import CurricularComponents from "./CurricularComponents ";

const LearningEcosystem = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full">
        <div className="relative h-80 overflow-hidden md:h-[28rem]">
          <div className="absolute w-full h-full transition-opacity duration-700 ease-in-out">
            {/* Background Image */}
            <img
              src="/images/bg-new.png"
              alt="Background"
              className="absolute w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            {/* Heading */}
            <h1 className="w-full md:w-1/2 absolute bottom-4 left-4 md:bottom-16 md:left-24 uppercase text-3xl md:text-6xl text-white font-bold">
              Learning EcoSystem
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="bg:none py-12 px-6"
       
       
       >
        <div className=" mx-auto  flex flex-col lg:flex-row items-center ">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">
              At NIILM University
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              We foster a robust learning ecosystem that transcends traditional
              boundaries, ensuring a holistic educational experience for our
              students. Within the classroom, students engage in dynamic
              activities such as pre-reads, lectures, discussions, and case
              studies, promoting active learning and critical thinking. They
              also participate in group activities, assignments, and
              simulations, fostering collaboration and practical skill
              development.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beyond the classroom, our campus and community offer numerous
              opportunities for enrichment. Students can join extracurricular
              activities, clubs, and societies, enabling them to explore diverse
              interests and develop leadership skills. They also contribute to
              the vibrant campus culture through involvement in student councils,
              events, festivals, and community service initiatives, fostering a
              sense of belonging and social responsibility.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In partnership with industry leaders, students participate in
              internships, industry immersion programs, and live projects,
              bridging the gap between academia and the professional world. Our
              comprehensive learning ecosystem empowers students to thrive
              academically, professionally, and personally.
            </p>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2">
            <img
              src="https://www.msu.edu.in/frontend_assets/images/learning-ecosystem--sec.png"
              alt="Classroom session"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <CurricularComponents/>
      <HomeGallerySection />
      <Footer />
    </div>
  );
};

export default LearningEcosystem;
