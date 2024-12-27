// import { awardsData, collaborationsData } from "../data/awardspage/awardsData" ;
import { NavLink } from "react-router-dom";
import { awardsData } from "../../data/awardspage/awardsData";
import { collaborationsData } from "../../data/awardspage/awardsData";
import Navbar from "../Navbar";
import Footer from "../Footer";
const AwardsPage = () => {
  return (

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="/images/main.png"
          alt="Awards Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <h1 className="text-5xl font-bold text-white">Awards</h1>
        </div>
      </div>
    
      {/* Awards Section */}
      <section className="py-16">
        <div className=" mx-auto">
          <h1 className="text-5xl font-bold text-center mb-6">Awards</h1>
          <p className="text-center text-xl leading-relaxed mb-16 max-w-5xl mx-auto font-medium ">
            Our Unique Initiatives and Innovative Integrations, Appreciated in
            skill embedded in higher education has been Appreciated at different
            forums and has been a continuous source of motivation for team MSU
            to in the path of progression.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6">
            {awardsData.map((award) => (
              <div
                key={award.id}
                className="relative group h-[267px] w-[476px] rounded-2xl overflow-hidden"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#a60101] via-yellow-[#ff6b6b] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-white transition-colors duration-300">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-16 bg-gray-100">
        <div className=" mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6">
            Our Collaborations
          </h2>
          <p className="text-center text-xl leading-relaxed mb-16 max-w-5xl mx-auto font-medium ">
            Awards and Recognition define the direction of the organisation. To
            map up Industry niche and avant-garde foresightedness participating
            in National Survey and Award process is quintessential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6">
            {collaborationsData.map((collab) => (
              <div
                key={collab.id}
                className="relative p-3 rounded-[40px] border-2 border-black"
              >
                <div className="relative group h-[367px] w-[460px] rounded-[32px] overflow-hidden bg-white">
                  <img
                    src={collab.image}
                    alt={collab.name}
                    className="w-full h-[65%] object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-white p-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      {collab.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
   
  );
};

export default AwardsPage;