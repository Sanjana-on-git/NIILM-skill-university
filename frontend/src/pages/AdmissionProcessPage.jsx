import { Link } from "react-router-dom";
import AdmissionSection from "../components/homepage/admission/AdmissionSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stages = [
  {
    id: 1,
    imageUrl: "https://www.msu.edu.in/landing_assets/images/admission/1.png",
    title: "Application",
    description: "Fill the online application form.",
    link: "https://application.msu.edu.in/campus-programme-registration",
    primaryColor: "88be5f",
    secondaryColor: "61a350",
  },
  {
    id: 2,
    imageUrl: "https://www.msu.edu.in/landing_assets/images/admission/2.png",
    title: "Registration Fee Payment",
    description:
      "Follow these simple steps to complete the application and registration payment through the portal",
    link: "",
    primaryColor: "97d2d9",
    secondaryColor: "34a8c6",
  },
  {
    id: 3,
    imageUrl: "https://www.msu.edu.in/landing_assets/images/admission/3.png",
    title: "Medhavi Aptitude & Scholarship Test",
    description:
      "This test evaluates core competencies of students as well as provides financial assitance.",
    link: "",
    primaryColor: "548dbf",
    secondaryColor: "38649c",
  },
  {
    id: 4,
    imageUrl: "https://www.msu.edu.in/landing_assets/images/admission/4.png",
    title: "Get Your Admission Offer Letter",
    description:
      "Once we have reviewed your application, you may submit the documents & exam results to take the process forward.",
    link: "",
    primaryColor: "aab1b5",
    secondaryColor: "9ba3a7",
  },
  {
    id: 5,
    imageUrl: "https://www.msu.edu.in/landing_assets/images/admission/5.png",
    title: "Enrollment",
    description:
      "Complete the enrollment process by paying the enrollment fees.",
    link: "",
    primaryColor: "88be5f",
    secondaryColor: "61a350",
  },
];

const AdmissionProcessPage = () => {
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
              admission Process
            </h1>
          </div>
        </div>
      </div>

      {/* Stages Section */}
      <div>
        <div className="mx-auto w-4/5 grid grid-cols-[2fr_3fr] my-12">
          <div className="flex flex-col-reverse">
            <img src="https://www.msu.edu.in/frontend_assets/images/process-img.webp" />
          </div>
          <div className="flex flex-col gap-y-8">
            {stages.map((item) => (
              <div
                className="p-6 flex rounded-xl border shadow-xl border-gray-200"
                key={item.id}
              >
                <div className="w-1/6 flex justify-center items-center">
                  <img className="w-24 h-24" src={item.imageUrl} />
                </div>
                <div
                  className="mx-4 w-1/6 h-[120px] rounded-bl-[30px] rounded-br-[30px] transform -translate-y-[25px] text-white font-bold text-center flex justify-center flex-col"
                  style={{
                    background: `linear-gradient(to bottom, #${item.primaryColor}, #${item.secondaryColor})`,
                  }}
                >
                  <div className="mx-auto text-xl">
                    <p className="p-2 border-b border-white">STEP</p>
                    <p className="mt-2">0{item.id}</p>
                  </div>
                </div>
                <div className="w-2/3 flex flex-col gap-y-2 mx-4">
                  <h1 className="text-2xl font-bold border-b border-black mb-2 pb-4">
                    {item.title}
                  </h1>
                  <p>{item.description}</p>
                  {item.link ? (
                    <Link
                      to="https://application.msu.edu.in/campus-programme-registration"
                      className="hover:text-redTheme"
                    >
                      {item.link}
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Admission */}
      <AdmissionSection />
      <Footer/>
    </>
  );
};

export default AdmissionProcessPage;