import Footer from "../Footer";
import Navbar from "../Navbar";
// import CurrentInfoSection from "../components/schoolspage/current-info/CurrentInfoSection";
import AcademicSwiperComponent from "../swiper/homepage/AcademicSwiperComponent";
import { industryPartnersData } from "../../data/homepage/collab-partnerData";

const LearningWithIndustryPage = () => {
  return (
    <section>
      <Navbar />
      <div className="relative w-full">
        <div className="relative h-80 overflow-hidden md:h-[28rem]">
          <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out`}
          >
            {/* Image */}
            <img
              src="/images/bg-new.png"
              alt={`Alt image`}
              className="absolute w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            {/* Text */}
            <h1 className="w-full md:w-1/2 absolute bottom-4 left-4 md:bottom-16 md:left-24 uppercase text-3xl md:text-6xl text-white font-bold">
              Learning With Industry
            </h1>
          </div>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="mt-20 md:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-4/5 mx-auto">
          <div className="text-lg tracking-wide mx-12">
            <p className="leading-10 text-lg md:text-xl">
              NIILM Skills University revolutionizes traditional pedagogy by
              integrating real-world industry experience directly into the
              curriculum. Through the pioneering Industry as Campus approach,
              students embark on a year-long immersive journey within
              workplaces, earning course credits while gaining practical
              insights and skills. This Earn while You Learn model enables
              students to actively participate in day-to-day operations, honing
              their professional competencies under supervisor guidance.
              Engaging in real-time industry projects and assessments aligns
              their learning with industry standards, fostering outcome-based
              education. This innovative framework fosters confident,
              industry-ready professionals, breaking the mold of conventional
              higher education and propelling students toward successful
              careers.
            </p>
          </div>
          <div className="w-full h-full mt-4 md:mt-0">
            <img
              className="object-cover md:rounded-tl-[12rem] w-full h-full"
              src="/images/campus/campus-1.jpg"
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* 3rd Section */}
      <div
        className="w-full h-auto text-black pt-2 pb-8"
        style={{
          backgroundImage: `url("/images/event-banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-3/4 mx-auto flex flex-col items-center text-center py-10">
          <h1 className="text-3xl md:text-5xl mb-6 font-bold">
            How NIILM makes you Industry-Ready
          </h1>
          <p className="text-lg md:text-xl leading-7 tracking-wide w-full md:w-5/6">
            Explore industry-oriented academics at NIILM Skills University,
            where education meets real-world demands. Gain practical skills for
            a competitive edge in your chosen field.
          </p>
        </div>
        <div>
          <AcademicSwiperComponent />
        </div>
      </div>

      {/* 4th Section */}
      <div className="py-16 bg-gray-100">
        <div className="w-4/5 mx-auto mb-12">
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-8">
            Industry Collaborations
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-5">
            {industryPartnersData.map((item, index) => (
              <div
                key={index}
                className="bg-white flex justify-center p-2 m-4 border-2 border-gray-400 h-32 rounded-xl"
              >
                <img src={item.images} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        {/* <CurrentInfoSection /> */}
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default LearningWithIndustryPage;
