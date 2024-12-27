import { useState } from "react";

import CurrentInfoSection from "../components/schoolspage/current-info/CurrentInfoSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const programs = [
  "B. Sc. in Clinical Psychology",
  "B.Tech in Full Stack and DevOps",
  "B.Tech in Cloud Computing and Cyber Security",
  "Diploma in Computer Science Engineering",
  "B.Tech in Data Science and AI",
  "B.Sc. in Nursing",
  "B.Sc. in Emergency and Critical Care Technology",
  "Diploma in Medical Laboratory Technology",
  "B.Sc. in Animation and VFX",
  "Diploma in Graphic Design",
  "BBA in Technology Management",
  "BCA in Cloud Computing and Cyber Security",
  "Bachelors in Physiotherapy",
  "BCA in Software Development",
  "B.Sc. in Hospitality and Hotel Management",
  "Bachelors in Optometry",
  "B.Sc. in Nutrition and Dietetics",
  "B.Sc. in Operation Theatre Technology",
  "B.Sc. in Radiology and Imaging Technology",
  "B.Sc. in Renal Dialysis Technology",
  "B.Sc. in Medical Laboratory Technology",
];

const programCategories = [
  "Diploma",
  "B.Sc.",
  "BCA",
  "BBA",
  "Bachelors",
  "B.Tech",
];

const UndergraduatePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? program.toLowerCase().startsWith(selectedCategory.toLowerCase())
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Header Section */}
      <div className="relative w-full">
        <Navbar/>
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
            <h1 className="w-full md:w-1/2 absolute bottom-4 left-4 md:bottom-16 md:left-24 uppercase text-3xl md:text-6xl text-white font-bold">
              Undergraduate
            </h1>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div>
        <div className="mx-auto w-4/5 my-12">
          <p className="text-xl leading-8">
            Medhavi Skills University has embarked on a revolutionary journey in
            higher education, moving away from the traditional mold to embrace a
            unique teaching pedagogy centered on “industry on campus.” The
            university offers a wide range of undergraduate programs in
            accordance with the NEP 2020. Furthermore, it has formulated a new
            student-centric “Curriculum and Credit Framework for Undergraduate
            Programs (CCFUP),” incorporating a flexible choice-based credit
            system and a multidisciplinary approach. This will facilitate
            students in pursuing their career paths by selecting subjects or
            fields of their interest. At Medhavi Skills University, we celebrate
            students! We believe every student is different in their interests,
            passions, and goals. Therefore, we aim to create a personalized
            curriculum for purposeful career progression for each of them.
            Students can design or customize their degrees by choosing a strong
            foundational core and electives aligned with their skills and
            interests.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div
        style={{ backgroundImage: "url('/images/bg-new.png')" }}
        className="bg-cover bg-center"
      >
        <div className="flex flex-col mx-auto w-4/5 pt-24 pb-12">
          <h1 className="text-center text-4xl text-white font-bold mb-6">
            Our Enriching Programs To Choose From
          </h1>
          <p className="text-center text-lg text-white">
            By choosing dual degree programs, it means you can graduate with two
            degrees at the end of your studies.
          </p>
          <div className="my-6 w-full">
            <div className="p-4 w-full mx-auto">
              <div className="flex flex-col gap-4 md:flex-row">
                {/* Search Bar */}
                <input
                  type="text"
                  placeholder="Search programs"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 px-6 py-4 rounded w-1/2"
                />

                {/* UG Programs Dropdown (Disabled) */}
                <select
                  disabled
                  className="border border-gray-300 px-4 py-2 rounded w-1/4 bg-gray-100 text-gray-500"
                >
                  <option value="ug">UG Programs</option>
                </select>

                {/* Category Filter Dropdown */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded w-1/4"
                >
                  <option value="">All Categories</option>
                  {programCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Program List */}
              <div className="bg-white my-12 p-6 rounded-xl shadow-md">
                <table className="table-auto w-full border-collapse">
                  <tbody>
                    {filteredPrograms.length > 0 ? (
                      filteredPrograms.reduce((rows, program, index) => {
                        if (index % 2 === 0) {
                          rows.push(
                            <tr
                              key={index}
                              className={`${
                                rows.length % 2 === 0
                                  ? "bg-white"
                                  : "bg-gray-100"
                              } hover:bg-gray-200 transition duration-200 grid grid-cols-2`}
                            >
                              {/* First Program in the Row */}
                              <td className="px-4 py-3 border-b border-gray-300 flex items-center gap-2">
                                <span className="text-4xl text-redTheme">
                                  •
                                </span>
                                <span className="mx-2 text-lg font-medium">
                                  {program}
                                </span>
                              </td>

                              {/* Second Program in the Row */}
                              <td className="px-4 py-3 border-b border-gray-300 flex items-center gap-2">
                                {filteredPrograms[index + 1] ? (
                                  <>
                                    <span className="text-4xl text-redTheme">
                                      •
                                    </span>
                                    <span className="mx-2 text-lg font-medium">
                                      {filteredPrograms[index + 1]}
                                    </span>
                                  </>
                                ) : (
                                  <span className="text-gray-500"></span>
                                )}
                              </td>
                            </tr>
                          );
                        }
                        return rows;
                      }, [])
                    ) : (
                      <tr>
                        <td
                          colSpan={2}
                          className="px-4 py-3 text-gray-500 text-center border-b border-gray-300"
                        >
                          No programs found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Section */}
      <div>
        <div className="flex flex-col mx-auto w-4/5 pt-24 pb-12">
          <h1 className="text-center text-4xl font-bold mb-6">How to apply</h1>
          <p className="text-center text-lg">
            By choosing dual degree programs, it means you can graduate with two
            degrees at the end of your studies.
          </p>
          <div className="grid grid-cols-5 gap-6 mt-16">
            {/* First Tile */}
            <div className="p-6 bg-[linear-gradient(270deg,_rgba(0,_0,_0,_4%),_transparent)] rounded-[20px] border-dotted border-t-2 border-r-2 border-b-2 border-[#e3e3e4] mx-4 transition-all duration-500 hover:scale-105 hover:shadow-lg">
              <img
                className="mb-4"
                src="https://msu.edu.in/public/storage/application_process/YTJ4aVInS3r2CTxcXJx2RlUM10xTT8TFb3OnvVm2.png"
              />
              <h1 className="text-xl font-bold">Submit Application</h1>
            </div>
            <div className="p-6 bg-[linear-gradient(270deg,_rgba(0,_0,_0,_4%),_transparent)] rounded-[20px] border-dotted border-t-2 border-r-2 border-b-2 border-[#e3e3e4] mx-4 transition-all duration-500 hover:scale-105 hover:shadow-lg">
              <img
                className="mb-4"
                src="https://msu.edu.in/public/storage/application_process/YTJ4aVInS3r2CTxcXJx2RlUM10xTT8TFb3OnvVm2.png"
              />
              <h1 className="text-xl font-bold">Pay Application Fee</h1>
            </div>
            <div className="p-6 bg-[linear-gradient(270deg,_rgba(0,_0,_0,_4%),_transparent)] rounded-[20px] border-dotted border-t-2 border-r-2 border-b-2 border-[#e3e3e4] mx-4 transition-all duration-500 hover:scale-105 hover:shadow-lg">
              <img
                className="mb-4"
                src="https://msu.edu.in/public/storage/application_process/YTJ4aVInS3r2CTxcXJx2RlUM10xTT8TFb3OnvVm2.png"
              />
              <h1 className="text-xl font-bold">
                Fill Application Form Online
              </h1>
            </div>
            <div className="p-6 bg-[linear-gradient(270deg,_rgba(0,_0,_0,_4%),_transparent)] rounded-[20px] border-dotted border-t-2 border-r-2 border-b-2 border-[#e3e3e4] mx-4 transition-all duration-500 hover:scale-105 hover:shadow-lg">
              <img
                className="mb-4"
                src="https://msu.edu.in/public/storage/application_process/YTJ4aVInS3r2CTxcXJx2RlUM10xTT8TFb3OnvVm2.png"
              />
              <h1 className="text-xl font-bold">Verify Mobile</h1>
            </div>
            <div className="p-6 bg-[linear-gradient(270deg,_rgba(0,_0,_0,_4%),_transparent)] rounded-[20px] border-dotted border-t-2 border-r-2 border-b-2 border-[#e3e3e4] mx-4 transition-all duration-500 hover:scale-105 hover:shadow-lg">
              <img
                className="mb-4"
                src="https://msu.edu.in/public/storage/application_process/YTJ4aVInS3r2CTxcXJx2RlUM10xTT8TFb3OnvVm2.png"
              />
              <h1 className="text-xl font-bold">Register Yourself</h1>
            </div>
          </div>
          <button className="mt-12 bg-[#165d23] text-white border border-white uppercase mx-auto text-lg sm:text-2xl font-bold py-4 px-8 sm:px-12 rounded-tl-full rounded-br-full transition-all duration-500 hover:rounded-bl-full hover:rounded-tr-full hover:rounded-br-none hover:rounded-tl-none">
            Apply Now
          </button>
        </div>
      </div>

      {/* Info Section */}
      <CurrentInfoSection />
      <Footer/>
    </>
  );
};

export default UndergraduatePage;