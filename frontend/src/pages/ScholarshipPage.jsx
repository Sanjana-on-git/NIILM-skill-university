import Footer from "../components/Footer";
import AdmissionSection from "../components/homepage/admission/AdmissionSection";
import Navbar from "../components/Navbar";
import {
  scholarshipChancellorData,
  regionScholarshipData,
  scholarshipPerformanceData,
  scholarshipSikkimData,
} from "../data/scholarshipspage/scholarshipData";

const ScholarshipPage = () => {
  return (
    <>
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
              Scholarship & Financial Aid
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div>
        <div className="mx-auto w-4/5 py-12">
          <div className="grid grid-cols-2 gap-12">
            <div className="h-full flex items-stretch relative">
              <div className="w-[740px] h-[550px] absolute inset-0 bg-redTheme -top-3 -left-3 rounded-br-[8rem]"></div>
              <img
                src="/images/campus/campus-1.jpg"
                className="object-cover rounded-br-[8rem] z-10"
              />
            </div>
            <div className="text-lg leading-10">
              <p className="mb-8">
                Medhavi Skills University offers a wide range of scholarships
                and financial aid options to ensure that all students,
                regardless of their background, have access to quality
                education. For Indian States and Union Territories, scholarships
                based on entrance test performance are available, with varying
                percentages based on the score. MSU ensures that financial
                constraints do not hinder access to education. Also, students
                through the initiative of Scholarship Cell are benefitting from
                various Government scholarship scheme for students of North
                Eastern Region, as illustrated below.
              </p>
              <p>
                MSU collaborates with banking and non-banking financial
                institutions to provide education loans and easy EMI options for
                fee payment, further enhancing accessibility. Through these
                initiatives, MSU remains committed to fostering inclusive
                education and supporting students in their pursuit of academic
                excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* National and State Level Scholarship Section */}
      <div className="bg-redTheme">
        <div className="mx-auto w-4/5 py-12 text-white flex flex-col">
          <h1 className="text-4xl font-bold">
            National and State Level Scholarship for Noth East
          </h1>
          <table className="mt-12 border border-white">
            <thead>
              <tr className="text-2xl">
                <th className="px-6 py-3 text-left border-r border-b border-white">
                  Scholarships Schemes (Central/State Govt.)
                </th>
                <th className="px-6 py-3 text-left border-b border-white">
                  Scholarships %
                </th>
              </tr>
            </thead>
            <tbody>
              {regionScholarshipData.map((entry, index) => (
                <tr key={index} className="text-xl border-b border-white">
                  <td className="px-6 py-4 border-r border-white">
                    {entry.scheme}
                  </td>
                  <td className="px-6 py-4 border-white">{entry.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Different Scholarships */}
      <div>
        <div className="mx-auto w-4/5 py-12">
          <div className="w-full">
            <h1 className="text-4xl font-bold">
              Scholarship Based on Medhavi Aptitude Test (MAT) Performance
            </h1>
            <table className="mt-12 border border-gray-200 w-full">
              <thead>
                <tr className="text-2xl">
                  <th className="px-6 py-3 text-left border-r border-b border-gray-200">
                    Score in Scholarship Test
                  </th>
                  <th className="px-6 py-3 text-left border-b border-gray-200">
                    Scholarships %
                  </th>
                </tr>
              </thead>
              <tbody>
                {scholarshipPerformanceData.map((entry, index) => (
                  <tr key={index} className="text-xl border-b border-gray-200">
                    <td className="px-6 py-4 border-r border-gray-200">
                      {entry.scheme}
                    </td>
                    <td className="px-6 py-4 border-gray-200">
                      {entry.percentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full mt-12">
            <h1 className="text-4xl font-bold">Chancellor’s Scholarship</h1>
            <table className="mt-12 border border-gray-200 w-full">
              <thead>
                <tr className="text-2xl">
                  <th className="px-6 py-3 text-left border-r border-b border-gray-200">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left border-b border-gray-200">
                    Scholarships %
                  </th>
                </tr>
              </thead>
              <tbody>
                {scholarshipChancellorData.map((entry, index) => (
                  <tr key={index} className="text-xl border-b border-gray-200">
                    <td className="px-6 py-4 border-r border-gray-200">
                      {entry.scheme}
                    </td>
                    <td className="px-6 py-4 border-gray-200">
                      {entry.percentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full mt-12">
            <h1 className="text-4xl font-bold">
              Scholarship for Sikkim based Residents
            </h1>
            <table className="mt-12 border border-gray-200 w-full">
              <thead>
                <tr className="text-2xl">
                  <th className="px-6 py-3 text-left border-r border-b border-gray-200">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left border-b border-gray-200">
                    Scholarships %
                  </th>
                </tr>
              </thead>
              <tbody>
                {scholarshipSikkimData.map((entry, index) => (
                  <tr key={index} className="text-xl border-b border-gray-200">
                    <td className="px-6 py-4 border-r border-gray-200">
                      {entry.scheme}
                    </td>
                    <td className="px-6 py-4 border-gray-200">
                      {entry.percentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Admission Section */}
      <AdmissionSection />
      <Footer/>
    </>
  );
};

export default ScholarshipPage;