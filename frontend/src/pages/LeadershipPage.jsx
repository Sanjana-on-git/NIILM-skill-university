import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { leadershipData } from "../data/leadershippage/leadershipData";

const LeadershipPage = () => {
  return (
    <>
     <Navbar/>
      {/* leadership page starts here */}
      <div className="relative w-screen md:h-[50vh] lg:h-[75vh]">
       
        <img
          src="https://www.msu.edu.in/frontend_assets/images/leadership-cover.png"
          alt="#leadership"
          className="bg-cover w-full h-full"
        />
        <div className="absolute inset-0 md:h-[50vh] lg:h-[75vh] bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute inset-x-0 bottom-4  p-8">
          <h2 className="text-5xl font-extrabold text-white">Leadership</h2>
        </div>
      </div>

      {/* Leadership content start here  */}
      <div className="mt-12 flex justify-center items-center md:px-14  lg:px-20 gap-4">
        <p className="text-[17px] font-medium  leading-10 ">
          The founding of NIILM School of Vocational Education was the result of
          innovative leadership and teamwork. The goal of this universitys
          educational philosophy is to develop and support action leaders. NSVE
          priorities include conducting skill gap analyses, designing and
          integrating qualification packs, operationalizing apprenticeship
          programs, improving its understanding of the learning scenario to
          enable better alignment between industry needs and youth aspirations,
          and tackling a number of educational challenges. Success has been
          paved by the University governance, which has consistently
          strengthened academic and industry support. With the support of a
          strong leadership group, we have adopted a progressive philosophy that
          aims to write a new chapter in the history of education. The
          industrial and academic support for success was progressively expanded
          by this university governance. The university capable leadership has a
          forward-thinking ideology to create a pivotal history in education.
        </p>
      </div>
      {/* Their authorities content start here */}
      {leadershipData.map((item, index) => {
        const { name, position, email, contact, text1, text2, image } = item;
        const isEven = index % 2 === 0; // Check if index is even

        return (
          <div
            className={`grid mt-12 grid-cols-1 lg:grid-cols-2 items-center gap-x-8 ${
              isEven ? "" : "lg:flex-row-reverse"
            }`}
            key={index}
          >
            {/* Left Side Content */}
            <div
              className={`flex flex-col px-6 lg:px-20 gap-4 justify-center ${
                isEven
                  ? "order-1 justify-self-start"
                  : "order-2 justify-self-end"
              }`}
              style={{ minHeight: "80vh" }}
            >
              <p className="text-[#a60101] text-4xl font-bold">{name}</p>
              <p className="text-gray-500 text-2xl font-bold">{position}</p>
              <p className="text-gray-500 font-bold">{email}</p>
              <p className="text-gray-500 font-bold">{contact}</p>
              <p className="mt-4 text-xl">
                {text1}
                <br />
                <br />
                {text2}
              </p>
            </div>

            {/* Circle Section */}
            <div
              className={`h-[80vh] w-[80vh] bg-[#165d23] rounded-full max-md:hidden flex items-center justify-center flex-shrink-0 ${
                isEven
                  ? "order-2 justify-self-end"
                  : "order-1 justify-self-start"
              }`}
            >
              {/* Image Part */}
              <div
                className={`relative w-[65vh] h-[60vh] border-4 border-white ${
                  isEven ? "-translate-x-1/4" : "translate-x-[35%]"
                } rounded-tl-2xl overflow-hidden`}
              >
                <img
                  src={image}
                  alt="Inner Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* For Mobile View */}
            <div className="flex justify-center items-center w-full md:hidden">
              <img
                src={image}
                alt={name}
                className="object-cover w-[90%] h-auto"
              />
            </div>
          </div>
        );
      })}
      <Footer/>
    </>
  );
};

export default LeadershipPage;