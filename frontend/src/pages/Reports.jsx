import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Reports = () => {
  const resources = [
    {
      title: "Guidelines for Transforming Higher Education Institutions",
      image: "https://www.msu.edu.in/frontend_assets/images/guideline-1.jpg", // Replace with actual image path
      link: "https://www.msu.edu.in/frontend_assets/images/pdf/5599305_Guidelines-for-Transforming-Higher-Education-Institutions-into-Multidisciplinary-Institutions.pdf", // Replace with actual PDF path
    },
    {
      title: "Learning Outcomes-Based Curriculum Framework",
      image: "https://www.msu.edu.in/frontend_assets/images/guideline-2.jpg",
      link: "https://www.msu.edu.in/frontend_assets/images/pdf/LEARNING-OUTCOMES-BASED-CURRICULUM-FRAMEWORK-FOR-UNDERGRADUATE-EDUCATION.pdf",
    },
    {
      title: "National Education Policy 2020",
      image: "https://www.msu.edu.in/frontend_assets/images/guideline-3.jpg",
      link: "https://www.msu.edu.in/frontend_assets/images/pdf/NEP_2020-reso-min.pdf",
    },
    {
      title: "Evaluation Reforms in Higher Educational Institutions",
      image: "https://www.msu.edu.in/frontend_assets/images/guideline-4.jpg",
      link: "https://www.msu.edu.in/frontend_assets/images/pdf/2142241_NHEQF-Draft.pdf",
    }
   
  ];

  return (
    <div className="font-sans">
      <Navbar/>
     
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.msu.edu.in/frontend_assets/images/banner/RESOURCE\ REPOTRS.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-bold mb-2">
            Reports
          </h1>
        </div>
      </div>

      
      <div className=" mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold underline"
                >
                  View PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Reports;