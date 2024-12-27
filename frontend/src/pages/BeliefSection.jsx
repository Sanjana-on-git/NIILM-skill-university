import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BeliefSection = () => {
  return (
    <div className="font-sans">
      <Navbar/>
      
       <div
        className="h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://www.msu.edu.in/frontend_assets/images/we-belive-img.png')",
        }}
      >
        <h1 className="text-white text-4xl lg:text-5xl font-bold tracking-wide">
          We Believe
        </h1>
      </div>
     
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:px-16">
       
        <div className="lg:w-1/2 w-full text-left mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
            At <span className="text-blue-500">NIILM UNIVERSITY</span>, <br />
            We redefine the learning <br/>experience & outcomes.
          </h2>
          <p className="text-yellow-500 text-3xl lg:text-4xl font-bold leading-snug mt-5 mb-8">
            We believe,
          </p>

          
          <div className="bg-blue-600 text-white rounded-lg p-6 lg:p-8 shadow-lg">
            <p className="border-b border-blue-300 pb-3 mb-3">
              Education Can’t bring Employability without experience with Employers.
            </p>
            <p className="border-b border-blue-300 pb-3 mb-3">
              Can’t be Enjoyable with the pressure of Memorization for Grades,
            </p>
            <p className="border-b border-blue-300 pb-3 mb-3">
              Can’t be Exciting without the attainment of Meaningful Milestones.
            </p>
            <p className="border-b border-blue-300 pb-3 mb-3">
              Education can nurture Responsibility with the Freedom to make mistakes and improve.
            </p>
            <p className="border-b border-blue-300 pb-3 mb-3">
              Can bring creativity with the self-space to think and create.
            </p>
            <p className="border-b border-blue-300 pb-3 mb-3">
              Can’t bring togetherness without the practice of collaboration.
            </p>
            <p>
              Education can’t bring life-readiness without challenging the zone of self-comfort.
            </p>
          </div>
        </div>

       
        <div className="lg:w-1/2 w-full relative">
         
          <img
            src="https://www.msu.edu.in/frontend_assets/images/we-belive-img.png"
            alt="Students"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BeliefSection;








