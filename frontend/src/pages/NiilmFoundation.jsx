import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stats = [
  {
    id: 1,
    value: "18+",
    description: "Sectors",
    image: "https://www.msu.edu.in/frontend_assets/images/icons/sector.png",
  },
  {
    id: 2,
    value: "220000+",
    description: "Trained of which 60% are women",
    image: "https://www.msu.edu.in/frontend_assets/images/icons/trained.png",
  },
  {
    id: 3,
    value: "15+",
    description: "CSR Partners",
    image: "https://www.msu.edu.in/frontend_assets/images/icons/csr.png",
  },
  {
    id: 4,
    value: "60000+",
    description: "RPL Training & certification",
    image: "https://www.msu.edu.in/frontend_assets/images/icons/trained.png",
  },
  {
    id: 5,
    value: "105+",
    description: "Differently abled youth trained & placed",
    image: "https://www.msu.edu.in/frontend_assets/images/icons/youtuh.png",
  },
  {
    id: 6,
    value: "190000+",
    description: "Placed in 20+",
    image: "https://www.msu.edu.in/frontend_assets/images/icons/placed.png",
  },
  {
    id: 7,
    value: "9+",
    description: "PMKKs",
    image: "https://www.msu.edu.in/frontend_assets/images/icons/pmkk.png",
  },
  {
    id: 8,
    value: "500+",
    description: "Industry Partners",
    image: "https://www.msu.edu.in/frontend_assets/images/icons/industry.png",
  },
  {
    id: 9,
    value: "200+",
    description: "Skill training centers",
    image: "https://www.msu.edu.in/frontend_assets/images/icons/skills.png",
  },
];

const EngagementSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Engagement and Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative bg-white shadow-lg rounded-lg p-6 text-center"
            >
             
              <div className="flex justify-center">
                <img
                  src={stat.image}
                  alt={stat.description}
                  className="w-20 h-20 mb-6"
                />
              </div>
              
              <h3 className="text-3xl font-extrabold text-blue-500">{stat.value}</h3>
             
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {stat.description}
              </p>
              
              <div className="absolute inset-x-0 bottom-0 h-4 rounded-full bg-blue-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Niilmfoundation = () => {
  return (
    <div className="font-sans">
      <Navbar/>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.msu.edu.in/frontend_assets/images/277788536_1027956957809008_4479930361276866864_n.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-bold mb-2">
            Changing Lives,
          </h1>
          <h2 className="text-xl lg:text-2xl text-orange-300 italic">
            One Skill at a Time
          </h2>
          
        </div>
      </div>

      <div className="bg-gray-50 py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6"> NIILM UNIVERSITY</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            NIILM UNIVERSITY is a Non-Profit company under section 25 that was incorporated in the
            year 2012 and is supported by the Dudani Group of Companies with an annual turnover of
            600+ crore. It provides exposure to mining, coal processing, iron & steel, real estate,
            and more.  NIILM UNIVERSITY is a training partner for the National Skill Development
            Corporation (NSDC), impacting 1.2 lakh students through various initiatives.
          </p>
          <p className="text-gray-600 leading-relaxed">
          NIILM UNIVERSITYis empaneled with the Ministry of Skill Development and
            Entrepreneurship as a Third-Party Aggregator (TPA). Its CSR clients include Tata
            Consultancy Services (TCS), GE Healthcare, Emami Group, Whirlpool, Yes Bank, and more.
          </p>
        </div>
      </div>

      <EngagementSection />
      <Footer/>
    </div>
  );
}

export default Niilmfoundation;