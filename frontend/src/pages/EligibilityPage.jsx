
import { useState } from "react";

import CurrentInfoSection from "../components/schoolspage/current-info/CurrentInfoSection";

import { schoolsEligibilityData } from "../data/eligibilitypage/schoolsEligibilityData";

const EligibilityPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="relative h-80 overflow-hidden md:h-[28rem]">
          <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out`}
          >
            {/* Image */}
            <img
              src="/images/bg-new.png"
              alt={`Alt`}
              className="absolute w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            {/* Text */}
            <h1 className="w-full md:w-full absolute bottom-4 left-4 md:bottom-16 md:left-24 uppercase text-3xl md:text-6xl text-white font-bold">
              Eligibility & Selection Criterion
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto w-4/5 py-12">
          {/* Accordion */}
          <div className="border-2 border-gray-300 rounded-lg py-8">
            {schoolsEligibilityData.map((school, index) => (
              <div key={index}>
                {/* Accordion Heading */}
                <div
                  className={`flex justify-between cursor-pointer ${
                    activeIndex === index
                      ? "bg-redTheme text-white"
                      : "bg-gray-200"
                  }  p-4 text-xl my-2`}
                  onClick={() => handleToggle(index)}
                >
                  <span className="font-bold">{school.heading}</span>
                  <span className="text-2xl mr-4">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden flex transition-all duration-300 ${
                    activeIndex === index ? "max-h-auto" : "max-h-0"
                  }`}
                >
                  {school.programs.length > 0 ? (
                    <table className="w-full bg-gray-100 m-8 rounded-xl">
                      <thead>
                        <tr className="text-left text-xl">
                          <th className="px-8 py-6 border-b border-gray-400">
                            PROGRAM
                          </th>
                          <th className="px-8 py-6 border-b border-gray-400">
                            DURATION
                          </th>
                          <th className="px-8 py-6 border-b border-gray-400">
                            ELIGIBILITY (MIN.)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {school.programs.map((program, i) => (
                          <tr key={i} className="text-xl">
                            <td className="px-8 py-6 border-b border-gray-400 text-redTheme font-bold">
                              {program.program}
                            </td>
                            <td className="px-8 py-6 border-b border-gray-400">
                              {program.duration}
                            </td>
                            <td className="px-8 py-6 border-b border-gray-400">
                              {program.eligibility}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="p-4">No programs available</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Info */}
      <CurrentInfoSection />
    </>
  );
};

export default EligibilityPage;