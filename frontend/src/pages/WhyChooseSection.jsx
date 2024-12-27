import { useState } from "react";
import { whyChooseData } from "../data/homepage/whyChooseData.js";

const WhyChooseSection = () => {
  const [selectedTab, setSelectedTab] = useState(whyChooseData[0]);

  const handleClick = (country) => {
    setSelectedTab(country);
  };

  return (
    <section
      className="w-full h-auto py-20"
      style={{
        backgroundImage: `url("/images/bg-new.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-auto w-11/12 mx-auto bg-white rounded-2xl shadow-2xl border-2 border-gray-200">
        <div className="m-4 p-8">
          {/* Title */}
          <div>
            <h1 className="text-[#165d23] text-4xl font-bold mb-8">
              WHY STUDY AT NIILM?
            </h1>
          </div>

          {/* Country Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {whyChooseData.map((country) => (
              <button
                key={country.id}
                className={`flex-grow uppercase font-semibold py-6 px-4 bg-transparent rounded-lg text-start text-[1.2rem] text-black shadow-md ${
                  selectedTab.id === country.id
                    ? "border-b-4 border-[#a60101]"
                    : "border border-gray-300 border-b-4"
                }`}
                onClick={() => handleClick(country)}
              >
                {country.name}
              </button>
            ))}
          </div>

          {/* Country Description */}
          {selectedTab && (
            <div
              className="h-auto md:h-[26rem] w-full rounded-2xl relative p-6 sm:p-8 md:p-12"
              style={{
                backgroundImage: selectedTab
                  ? `url(${selectedTab.imageUrl})`
                  : 'url("/images/default-bg.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="md:absolute sm:bottom-12 left-6 sm:left-12 text-white w-full">
                <h3 className="text-lg sm:text-2xl md:text-[2.8rem] font-semibold mb-4 sm:mb-8 sm:text-[2rem]">
                  {selectedTab.title}
                </h3>
                <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] leading-6 sm:leading-7 md:leading-9 w-full sm:w-10/12">
                  {selectedTab.info}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
