import React, { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const menuItems = [
    {
      label: "About",
      links: [
        { label: "Why NIILM", href: "/pages/WhyNiilmPage" },
        { label: "Who We Are", href: "/Niilmuniversity" },
        { label: "Leadership", href: "/LeadershipPage" },
        { label: "Recognition", href: "/RecognitionPage" },
        { label: "Award", href: "/awards" },
        { label: "Infrastructure", href: "/infrastructure" },
        {
          label: "Resources",
          links: [
            { label: "Reports", href: "/resources/reports" },
            { label: "Guidelines", href: "/resources/guidelines" },
          ],
        },

        { label: "Administration", href: "/administration" },

        { label: "Central Facilities", href: "/central-facilities" },
      ],
    },
    {
      label: "Academic",
      links: [
        { label: "Skills In Higher Education", href: "/Academics/Rnd" },
        { label: "We Believe", href: "/Webelieve" },
        { label: "Student Showcase", href: "/Academics/Student" },
        { label: "Nep Compliance", href: "/Academics/Nep" },
        { label: "Learning EcoSystem", href: "/learning-ecosystem" },
        { label: "Design Your Own Degree", href: "/design-degree" },
        { label: "Learning With Industry", href: "/learningwithindustry" },
        { label: "Evaluation", href: "/evaluation" },
        { label: "Experts and Mentors", href: "/expertsandmentors" },
        { label: "Academic Bank of Credits", href: "/Academics/Abc" },

        { label: "Research and Development", href: "/Academics/Rnd" },
        { label: "Annual Report", href: "/annual-report" },
      ],
    },

    {
      label: "Admissions",
      links: [
        { label: "Undergraduate - Campus Programmes", href: "/undergraduate" },
        { label: "Postgraduate - Campus Programmes", href: "/Postgraduate" },
        { label: "Work Integrated Programmes", href: "#" },
        { label: "Admission Process", href: "/AdmissionProcessPage" },
       
        { label: "Scholarship Financial Aid", href: "/Scholarship" },
        
        { label: "Eligibility Selection Criterion", href: "/Eligibility" },
        { label: "Fee Structure 2024-2025", href: "#" },
        { label: "Fee Refund Policy", href: "#" },
      ],
    },

    {
      label: "Schools",
      links: [
        { label: "School of Engineering", href: "" },
        { label: "School of Management", href: "#" },
        { label: "School of Arts & Science", href: "#" },
      ],
    },
    {
      label: "Collaborations",
      links: [
        { label: "Industry", href: "/Industry" },
        { label: "Skilling", href: "/Skilling" },
        { label: "Research Collaborations", href: "/ResearchCollaborations" },
      ],
    },
    {
      label: "Life at MSU",
      links: [
        { label: "Sports", href: "/Life/Sports" },
        { label: "Culture", href: "/Life/Culture" },
        { label: "Happy Faces", href: "/Life/Happy" },
        { label: "NSS", href: "/Life/NSS" },
        {label:"SEDG", href:"/Life/SEDG"}

      ],
    },
    {
      label: "Happenings",
      links: [
        { label: "News", href: "/Happening/News" },
        { label: "Blogs", href: "/Happening/Blogs" },
        {label :"NewsLetter", href:"/Happening/NewsLetter"},
        {label :"Circulars", href:"/Happening/Circulars"},
        {label :"Media", href:"/Happening/Media"},

        

      ],
    },
    {
      label :"Details",
      links: [
        { label : "CAMPUS LOGIN", href: '/campus-login' },
        { label : "PAY FEE", href: '/pay-fee' },

      ]
    }






  ];

  return (
    <header>
      <div className="bg-redTheme text-center py-2 font-bold text-white overflow-hidden">
        <div className="whitespace-nowrap animate-move">
          Announcements: Admission 2025 Open for Queries or Telephonic Counseling call +91 5783921999
        </div>
      </div>

      <nav className="bg-white text-greenTheme flex items-center justify-between px-6 py-4 shadow-md4">
        <div className="logo">
          <img
            src="https://www.niilmuniversity.ac.in/web/assets/img/logo.png"
            alt="NIILM Skills University"
            className="h-16"
            width={200}
            height={80}
          />
        </div>

        <ul className="flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-4 py-2 border border-greenTheme rounded hover:bg-greenTheme hover:text-white transition"
              >
                {item.label}
              </a>
              {activeDropdown === index && (
                <div className="absolute bg-white text-greenTheme shadow-lg rounded mt-2 py-2 w-64 z-20">
                  {item.links.map((link, linkIndex) => (
                    link.label === "Resources" ? (
                      <div key={linkIndex} className="relative">
                        <button
                          onClick={toggleResources}
                          className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                        >
                          {link.label}
                        </button>
                        {isResourcesOpen && (
                          <div className="absolute bg-white text-greenTheme shadow-lg rounded mt-2 py-2 w-48">
                            {link.links.map((subLink, subIndex) => (
                              <a
                                key={subIndex}
                                href={subLink.href}
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                              >
                                {subLink.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {link.label}
                      </a>
                    )
                  ))}
                </div>
              )}
            </li>
          ))}
          <li>
            <a
              href="https://www.niilmuniversity.ac.in/application"
              className="bg-greenTheme text-white px-4 py-2 rounded hover:bg-red-700"
            >
              APPLY NOW
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;


