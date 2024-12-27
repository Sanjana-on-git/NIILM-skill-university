import AcademicSection from "../components/homepage/academic/AcademicSection";
import AdmissionSection from "../components/homepage/admission/AdmissionSection";
import CampusSection from "../components/homepage/campus/CampusSection";
import CollabPartnerSection from "../components/homepage/collab-partner/CollabPartnerSection";
import WhyChooseSection from "./WhyChooseSection";
import SocialSection from "../components/homepage/social/SocialSection";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import HeroSection from "../components/homepage/hero/HeroSection";
import HomeGallerySection from "../components/homepage/home-gallery/HomeGallerySection";
import Layoutgrid from "../components/homepage/layout-grid/LayoutGridSection";
import HeroGallerySection from "../components/homepage/hero-gallery/HeroGallerySection";
import UtilityNav from "../components/UtilityNav";

const HomePage = () => {
  return (
    <main className="w-full h-auto">
      
      <Navbar />
      <HeroGallerySection />
      <HeroSection />
      <HomeGallerySection />
      <Layoutgrid />
      <AcademicSection />
      <WhyChooseSection />
      <CampusSection />
      <CollabPartnerSection />
      <SocialSection />
      <AdmissionSection />
      <Footer />
    </main>
  );
};

export default HomePage;
