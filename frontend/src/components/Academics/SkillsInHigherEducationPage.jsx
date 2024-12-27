import Footer from "../Footer";
import Navbar from "../Navbar";
const SkillsInHigherEducationPage = () => {
  return (
    <section>
      <Navbar/>
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
              Skills in Higher Education
            </h1>
          </div>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="flex flex-col py-12">
        <div className="w-4/5 mx-auto text-xl tracking-wide leading-10">
          <div>
            <h1 className="text-redTheme font-bold text-2xl md:text-3xl">
              Today, India is one of the youngest nations in the world, with
              more than 62% of its population in the working-age group (15-59
              years), and over 54% of its total population below 25 years of
              age.
            </h1>
            <p className="mt-4 tracking-normal">
              Today, India is one of the youngest nations in the world, with
              more than 62% of its population in the working-age group (15-59
              years), and over 54% of its total population below 25 years of
              age. The world is rapidly aging, but India is still young. India
              population is estimated to be 141.7 crore by the end of 2022, with
              50% of the population being under the age of 30. In the next few
              decades, India will be powerhouse of talent and one of the largest
              contributors to the global workforce. To reap this demographic
              dividend, India needs to equip its workforce with knowledge and
              employability skills so that they can contribute substantially to
              the economic growth and development of the country. Our ability to
              provide High-quality educational opportunities to the youth will
              determine the future of our country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
            <div className="mr-12">
              <p className="leading-10">
                According to the India Skills Report 2023, 50.3% of young people
                in education were found to be highly employable overall. The
                current share of women in the Indian workforce is 33%, which is
                less than that of Males at 67%. More concerning is the growing
                wealth inequality. The top 1% in India now owns more than 40.5%
                of total wealth in 2021, while the bottom 50% of the population
                has around 3% of total wealth, as per the Oxfam India report
                2023. Be it the lack of employment opportunities for educated
                youth or growing wealth inequality or reduced participation of
                women in the workforce, having access to quality and Affordable
                professional higher education with assured employability can be
                instrumental in improving the present scenario. The higher
                education space is a platform to groom the youth for the
                development of the world and self. Offering a stalwart,
                progressive ecosystem for learning is essential.
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

          <div className="mt-12">
            <p className="leading-10">
              According to the India Skills Report 2023, 50.3% of young people
              in education were found to be highly employable overall. The
              current share of women in the Indian workforce is 33%, which is
              less than that of Males at 67%. More concerning is the growing
              wealth inequality. The top 1% in India now owns more than 40.5% of
              total wealth in 2021, while the bottom 50% of the population has
              around 3% of total wealth, as per the Oxfam India report 2023. Be
              it the lack of employment opportunities for educated youth or
              growing wealth inequality or reduced participation of women in the
              workforce, having access to quality and Affordable professional
              higher education with assured employability can be instrumental in
              improving the present scenario. The higher education space is a
              platform to groom the youth for the development of the world and
              self. Offering a stalwart, progressive ecosystem for learning is
              essential.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default SkillsInHigherEducationPage;
