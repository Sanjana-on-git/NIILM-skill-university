import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CentralFacilities = () => {
  const facilities = [
    {
      title: "Classroom",
      description:
        "Enjoy learning and immerse yourself in the modern learning space to unleash the best educational journey and interactive academics. State-of-the-art study halls are optimized for learning sessions, featuring smartboards and high-definition projectors to enhance learning engagement. Equipped with a seamless internet connection and advanced experience, students can participate in engaging education. Classrooms are designed to accommodate 40 students with Wi-Fi connectivity, and multimedia resources, creating an impactful environment.",
      image: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/central-facilities-img/Classroom.webp",
    },
    {
      title: "Conference Room",
      description:
        "Explore our conference room, equipped with a projector and other advanced technologies to engage in professional discussions and different collaborative events. The conference room at Medhavi Skills University provides an ideal ambiance for corporate and academic engagements. Explore the team meets, video conferences, and presentation works in this dynamic environment of MSU. Students have access to these amenities for a seamless and productive experience for all the guests.",
      image: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/central-facilities-img/Conference+Room.webp",
    },
    {
      title: "Seminar hall",
      description:
        "Enjoy learning and immerse yourself in the modern learning space to unleash the best educational journey and interactive academics. State-of-the-art study halls are optimized for learning sessions, featuring smartboards and high-definition projectors to enhance learning engagement. Equipped with a seamless internet connection and advanced experience, students can participate in engaging education. Classrooms are designed to accommodate 40 students with Wi-Fi connectivity, and multimedia resources, creating an impactful environment.",
      image: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/central-facilities-img/seminar_room.webp",
    },
    {
      title: "Library",
      description:
        "Enjoy learning and immerse yourself in the modern learning space to unleash the best educational journey and interactive academics. State-of-the-art study halls are optimized for learning sessions, featuring smartboards and high-definition projectors to enhance learning engagement. Equipped with a seamless internet connection and advanced experience, students can participate in engaging education. Classrooms are designed to accommodate 40 students with Wi-Fi connectivity, and multimedia resources, creating an impactful environment.",
      image: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/central-facilities-img/library.webp",
    },
    {
      title: "Wi-fi & LMS",
      description:
        "Enjoy learning and immerse yourself in the modern learning space to unleash the best educational journey and interactive academics. State-of-the-art study halls are optimized for learning sessions, featuring smartboards and high-definition projectors to enhance learning engagement. Equipped with a seamless internet connection and advanced experience, students can participate in engaging education. Classrooms are designed to accommodate 40 students with Wi-Fi connectivity, and multimedia resources, creating an impactful environment.",
      image: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/central-facilities-img/Computer+Lab.webp",
    },
    {
      title: "Doctor’s chamber",
      description:
        "Enjoy learning and immerse yourself in the modern learning space to unleash the best educational journey and interactive academics. State-of-the-art study halls are optimized for learning sessions, featuring smartboards and high-definition projectors to enhance learning engagement. Equipped with a seamless internet connection and advanced experience, students can participate in engaging education. Classrooms are designed to accommodate 40 students with Wi-Fi connectivity, and multimedia resources, creating an impactful environment.",
      image: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/doctors-chambers-medhavi-skills-university.webp",
    },
    {
      title: "First Aid Clinic",
      description:
        "Enjoy learning and immerse yourself in the modern learning space to unleash the best educational journey and interactive academics. State-of-the-art study halls are optimized for learning sessions, featuring smartboards and high-definition projectors to enhance learning engagement. Equipped with a seamless internet connection and advanced experience, students can participate in engaging education. Classrooms are designed to accommodate 40 students with Wi-Fi connectivity, and multimedia resources, creating an impactful environment.",
      image: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/central-facilities-img/First+Aid+Clinic.webp",
    },

    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Navbar/>
      
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://www.msu.edu.in/frontend_assets/images/why-msu-cover.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Our Central Facilities</h1>
        </div>
      </div>

      
      <div className="mt-12 space-y-12">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
           
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            {/* Facility Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-4">{facility.title}</h2>
              <p className="text-gray-600 leading-relaxed">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default CentralFacilities;

