import { useState, useEffect } from 'react';
import { MessageSquare, Phone, Search, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const  Technology=() => {
  
  const partners = [
    { name: "LCBS", logos: ["https://www.msu.edu.in/frontend_assets/images/industry-partners/lcbs-Black.png", "https://www.msu.edu.in/frontend_assets/images/industry-partners/ZICA.png"] },
    { name: "IGJ", logos: ["https://www.msu.edu.in/frontend_assets/images/industry-partners/logo-igj-1196116_2.png", "https://www.msu.edu.in/frontend_assets/images/industry-partners/raddison-blue.png"] },
    { name: "OM Logistics Ltd", logos: ["https://www.msu.edu.in/frontend_assets/images/industry-partners/DSC-Logo.png","https://www.msu.edu.in/frontend_assets/images/industry-partners/OM.png"] },
    { name: "Westin Hotels & Resorts", logos: ["https://www.msu.edu.in/frontend_assets/images/indu…y-partners/Holiday_Inn_Express_Blue_Logo.svg_.png","https://www.msu.edu.in/frontend_assets/images/industry-partners/B-4-M-LOGO.png","https://www.msu.edu.in/frontend_assets/images/industry-partners/Westin.jpg"] },
    { name: "Holiday Inn Express", logos: ["https://www.msu.edu.in/frontend_assets/images/industry-partners/Crowne_Plaza_logo_logotype.png"] },
    { name: "NIFD Global", logos: ["https://www.msu.edu.in/frontend_assets/images/industry-partners/450-x-200-logo.png", "https://www.msu.edu.in/frontend_assets/images/industry-partners/skilling-9.png"] },
    { name: "Holiday Inn", logos: ["https://www.msu.edu.in/frontend_assets/images/industry-partners/logo-13.jpg" , "https://www.msu.edu.in/frontend_assets/images/industry-partners/HOLIDAY_INN_EXPRESS.png"] },
    { name: "Positive Plastics", logos: ["	https://www.msu.edu.in/frontend_assets/images/industry-partners/holiday-inn.jpg", "	https://www.msu.edu.in/frontend_assets/images/industry-partners/d29-min.jpg"] },
    { name: "IHG Hotels & Resorts", logos: ["https://www.msu.edu.in/frontend_assets/images/industry-partners/d34.jpg","https://www.msu.edu.in/frontend_assets/images/industry-partners/d16.jpg"] },
    { name: "Under Water Solutions", logos: ["	https://www.msu.edu.in/frontend_assets/images/industry-partners/d33-min.jpg" , "https://www.msu.edu.in/frontend_assets/images/industry-partners/d32-min.jpg"] },
];

  const [currentLogos, setCurrentLogos] = useState(
    partners.map((partner) => (partner.logos.length > 1 ? 0 : -1)) // Only cycle for partners with multiple logos
  );


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLogos((prevLogos) =>
        prevLogos.map((currentIndex, idx) => {
          const partner = partners[idx];
          if (partner.logos.length > 1) {
            const newIndex = (currentIndex + 1) % partner.logos.length;
            return newIndex;
          }
          return currentIndex; 
        })
      );
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);



  const achievements = [
    {
      title: "1st in India",
      description: "to feature Learn & Earn during Degree",
      bgColor: "bg-[#F39C12]"
    },
    {
      title: "1st in India",
      description: "to promote NEP2020 with Industry Integration",
      bgColor: "bg-[#003366]"
    },
    {
      title: "1st in India",
      description: "to promote Overseas Mobility",
      bgColor: "bg-[#F39C12]"
    },
    {
      title: "1st in India",
      description: "to be the Awarding Body of UGC & NCVET, MSDE, GoI",
      bgColor: "bg-[#003366]"
    }
  ]

  const stats = [
    { number: "3500+", label: "Trainees" },
    { number: "50+", label: "Programmes" },
    { number: "100+", label: "Industry/Skill Partners" },
    { number: "2", label: "Campuses" },
    { number: "15+", label: "Schools & Centers" },
    { number: "100+", label: "Industry Experts" }
  ]

return (
    <div>
      <Navbar/>

    <div className="min-h-screen">

    <div className="relative h-[500px] ">
    <div className="relative h-80 overflow-hidden md:h-[28rem]">
          <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out`}
          >
           
            <img
              src="/images/bg-new.png"
              alt={`Alt image`}
              className="absolute w-full h-full object-cover"
            />
           
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
           
            <h1 className="w-full md:w-1/2 absolute bottom-4 left-4 md:bottom-16 md:left-24 uppercase text-3xl md:text-6xl text-white font-bold">
           Technology
            </h1>
          </div>
        </div>
      
      {/* Hero Content */}
      {/* <div className=" mx-auto px-4 h-full flex items-center">
        <h1 className="text-white text-6xl font-bold">Industry</h1>
      </div> */}
    </div>

    <div className="relative min-h-screen">
     
      <div className=" mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

            <div className="space-y-8 lg:pl-8 mb-40 mr-[25px]">
                <p className="text-gray-800 text-2xl leading-loose">
                    For years, a significant gap has persisted between academia and
                    industry, leaving graduates ill-equipped for the demands of the
                    workforce.At NILLM Skills University, our collaboration with industry
                    partners aims to bridge this gap effectively.Industry stakeholders actively participate in shaping our curriculum to
                    align with industry standards, ensuring that students acquire the skills
                    and knowledge needed for success in the real world.
                </p>
                <p className="text-gray-800 text-2xl leading-loose">
                    At NIILM Skills University, our collaboration with industry 
                    partners aims to bridge this gap effectively.
                </p>
                <p className="text-gray-800 text-2xl leading-loose">
                    Industry stakeholders actively participate in shaping our curriculum to
                    align with industry standards, ensuring that students acquire the skills
                    and knowledge needed for success in the real world.
                </p>
            </div>


          <div className="relative h-[400px] lg:h-[500px] mb-80">
            <img
              src="	https://www.msu.edu.in/frontend_assets/images/industry-img-page.png"
              alt="Student working with technical equipment"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#003366] text-white p-2 rounded-l-lg space-y-4 z-50">
        <button className="p-2 hover:bg-blue-800 rounded transition-colors flex items-center justify-center" aria-label="Message">
          <MessageSquare className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-blue-800 rounded transition-colors flex items-center justify-center" aria-label="Phone">
          <Phone className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-blue-800 rounded transition-colors flex items-center justify-center" aria-label="Search">
          <Search className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-blue-800 rounded transition-colors flex items-center justify-center" aria-label="Close">
          <X className="w-6 h-6" />
        </button>
      </div>

      <section className="py-16 -mt-52 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Technology Partners
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
              >
                <img
                  src={partner.logos[currentLogos[index]]}
                  alt={`${partner.name} logo`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto p-6 relative z-10 mt-[0px] h-[335px]">
      <div className="border-2 border-[#F39C12] rounded-3xl p-8 bg-green-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`${achievement.bgColor} rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#003366] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Technology;



