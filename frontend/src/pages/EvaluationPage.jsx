import Footer from "../components/Footer";
import AcademicSwiperComponent from "../components/swiper/homepage/AcademicSwiperComponent";
import Navbar from "../components/Navbar";
const EvaluationPage = () => {
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
              Evaluation
            </h1>
          </div>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="mt-20 md:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-4/5 mx-auto">
          <div className="text-lg tracking-wide mx-12">
            <p className="leading-10 text-lg md:text-xl">
              Assessment and evaluation at NIILM Skills University are dynamic
              processes geared towards fostering student growth and development.
              Students attainment of Teaching and Course Learning Outcomes (TLOs
              and CLOs) is evaluated through a diverse array of methods
              including assignments, quizzes, case studies, winter projects, and
              skill challenges. These varied assessment techniques offer
              students multiple avenues to demonstrate their understanding,
              critical thinking, and practical application of knowledge, thereby
              ensuring alignment with the university educational objectives.
              Further continuous evaluation for Concept and Applied courses,
              employing a mix of assessment methods such as presentations,
              digital evaluations, and weekly assessments to promote equity and
              enhance learning outcomes.
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
            Easy Evaluation - Effective Learning
          </h1>
          <p className="text-lg md:text-xl leading-7 tracking-wide w-full md:w-5/6">
            Explore industry-oriented academics at Medhavi Skills University,
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
        <div className="flex flex-col w-4/5 mx-auto mb-12 text-lg">
          <p className="mb-6">
            In India, assessments predominantly center around exams, favoring
            memorization over genuine learning. This method stifles curiosity,
            discourages exploration, and promotes rote memorization.
            Consequently, exams become stress-inducing events where students
            encounter high stakes, with minimal margin for error due to the
            make-or-break nature of the evaluation process. At NIILM Skills
            University, we have revamped our assessment process to address these
            issues by incorporating more horizontal assessment modes rather than
            relying solely on a vertical approach. We have the following Primary
            Objectives:
          </p>
          <ul className="list-disc pl-5">
            <li>Learning Outcome Based Education and Assessment</li>
            <ul className="list-disc ml-8">
              <li>
                The goal of learning is in achievement of the program/curriculum
                goals.
              </li>
              <li>
                Assessment methods and its questions must be mapped to each
                Course Level Outcome (CLO) and every CLO must be mapped to a
                Program Level Outcome (PLO).
              </li>
            </ul>
            <li>
              Assessments must be continuous to include both formative/Internal
              and summative/External components. At MSU, we have varied mode of
              Assessments such as:
            </li>
            <ul className="list-disc ml-8">
              <li>Written: Quizzes, Assignments, Report Writing, etc.</li>
              <li>Oral: Viva, Group Discussions, etc.</li>
              <li>
                Practical: Lab Work, Co-Curricular Activities, On Job Training,
                etc.
              </li>
              <li>
                Integrated Mode: Presentations, Field Assignments, Case Studies,
                Projects, etc.
              </li>
            </ul>
          </ul>
          <p className="mt-6">
            Assessments at NIILM Skills University is characterized by its
            continuous nature, extending beyond reliance solely on
            end-of-semester examinations. Half of the learning process involves
            regular class attendance and active participation in various
            internal assessments, including quizzes, assignments, and term
            tests. These assessments are meticulously mapped according to the
            learning outcomes, ensuring a comprehensive evaluation of students
            progress and understanding.
          </p>
          <p>
            Attendance plays an important role in Assessment and as per the UGC
            guidelines, 75% Attendance is mandatory to be able to appear for the
            Examination. At NIILM, we also have provision for marking system in
            Attendance as per the image shown:
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default EvaluationPage;
