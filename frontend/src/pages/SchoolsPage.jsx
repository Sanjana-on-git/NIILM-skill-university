import { useParams } from "react-router-dom";

import { schoolsData } from "../data/schoolspage/schoolsData";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import HeaderSection from "../components/schoolspage/header/HeaderSection";
import CurriculumSection from "../components/schoolspage/curriculum/CurriculumSection";
import ProgramsSection from "../components/schoolspage/programs/ProgramsSection";
import TextAreaSection from "../components/schoolspage/textarea/TextAreaSection";
import ExpertSection from "../components/schoolspage/expert/ExpertSection";
import SchoolsGallerySection from "../components/schoolspage/schools-gallery/SchoolsGallerySection";

import PartnershipSection from "../components/schoolspage/partnership/PartnershipSection";
import CurrentInfoSection from "../components/schoolspage/current-info/CurrentInfoSection";

const SchoolsPage = () => {
  const { schoolId } = useParams();
  const school = schoolsData[schoolId];

  if (!school) {
    return <div>School not found</div>;
  }

  return (
    <>
      <Navbar /> 
      <HeaderSection
        image={school.header.image}
        heading={school.header.heading}
      />
      <TextAreaSection content={school.textArea.content} />
      <CurriculumSection />
      <ProgramsSection UG={school.programs.UG} PG={school.programs.PG} />
      <ExpertSection />
      <SchoolsGallerySection content={school.gallery.content} />
      <PartnershipSection />
      <CurrentInfoSection />
      <Footer />
    </>
  );
};

export default SchoolsPage;
