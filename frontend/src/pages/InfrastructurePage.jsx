import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { infrastructureData } from "../data/infrastructurepage/infrastructureData";

const InfrastructurePage = () => {
  const { facilities } = infrastructureData;

  return (
    <div>
        <div className="w-full bg-white">
        <Navbar/>
      <div className="relative h-[400px]">
        <img
          src="/images/bg-new.png"
          alt="Awards Banner"
          className="absolute inset-0 w-full h-full object-cover"
          
        />
        <h1 className="w-full md:w-1/2 absolute bottom-4 left-4 md:bottom-16 md:left-24 uppercase text-3xl md:text-6xl text-white font-bold">
              Infrastructure
            </h1>
   
      </div>

      {/* Description Section */}
      <div className="w-full px-4 mb-10 mt-8">
        <p className="text-left text-xl leading-relaxed mb-16 mx-4 font-sans">
          NIILM Skills University boasts a comprehensive infrastructure
          tailored to enrich every aspect of student life. Spanning 20,000
          square feet, our sports arena houses a futsal court, volleyball court,
          badminton court, table tennis, and various other indoor sports
          facilities, fostering physical fitness and teamwork. State-of-the-art
          labs equipped with cutting-edge technology offer hands-on learning
          experiences, while digital classrooms facilitate interactive
          education. Our campus features vibrant social hubs including a cafe,
          providing spaces for relaxation and collaboration. With a focus on
          holistic development, our infrastructure ensures students have access
          to all amenities necessary for academic excellence and personal
          growth.
        </p>
      </div>
      <div className="bg-[#ffaeae] py-8">
        <div className="text-center py-8">
          <h1 className="text-6xl font-bold text-[#a60101]">
            CAMPUS & INFRASTRUCTURE
          </h1>
        </div>
        {/* Facilities Grid */}
        <div className=" mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-xl overflow-hidden group hover:bg-gradient-to-br hover:from-[#a60101] hover:to-[#ff6b6b]"
              >
                <div className="relative h-72">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-70% h-70% p-5 absolute inset-0 object-cover"
                  />
                </div>
                <div className="p-8 group-hover:bg-gradient-to-br group-hover:from-[#a60101] group-hover:to-[#ff6b6b]">
                  <h1 className="text-3xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-300">
                    {facility.title}
                  </h1>
                  <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  <Footer/>

    </div>
    
  );
};

export default InfrastructurePage;