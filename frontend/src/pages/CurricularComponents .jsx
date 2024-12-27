import React from "react";

const CurricularComponents = () => {
  const components = [
    {
      title: "Foundation Core",
      description:
        "to build a solid academic foundation with essential courses designed to provide fundamental knowledge and skills across disciplines.",
      icon: "📦", 
    },
    {
      title: "Skill Drill (Electives)",
      description:
        "to expose the students with variety of skill-based (elective) courses to explore your strengths and interests through hands-on experience in the relevant field.",
      icon: "🛠️", 
    },
    {
      title: "Major (Elective)",
      description:
        "to choose a specialized area of study that aligns with your career goals and interests, allowing for in-depth exploration and expertise development.",
      icon: "📄", 
    },
    {
      title: "Minor (Elective)",
      description:
        "to supplement your Major with additional skills in a related/unrelated field, empowering you to handle the diversified skills required in line with career goals.",
      icon: "📖", 
    },
    {
      title: "Industry Practice",
      description:
        "to gain hands-on experience through On-Job Learning (Internships and Apprenticeships), thereby bridging the gap between Academia and Professional world.",
      icon: "🏭", 
    },
    {
      title: "Capstone Projects",
      description:
        "to facilitate the students to have a comprehensive understanding connecting the outcomes through Industry/Live Projects, Field Survey, Community Problem Solving etc.",
      icon: "📊", // 
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        CURRICULAR COMPONENTS
      </h2>
      <p className="text-center text-gray-700 mb-10">
        Every student is different in their interests, passions, and aspirations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurricularComponents;

