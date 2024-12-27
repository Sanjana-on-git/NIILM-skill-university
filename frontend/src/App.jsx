import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SchoolsPage from "./pages/SchoolsPage";
import LearningWithIndustryPage from "./pages/LearningWithIndustryPage"
import EvaluationPage from "./pages/EvaluationPage";
import SkillsInHigherEducationPage from "./pages/SkillsInHigherEducationPage";

import Abc from "./components/Academics/Abc";
import NEP from "./components/Academics/Nep";
import Rnd from "./components/Academics/Rnd";
import Student from "./components/Academics/Student";
import Sports from "./components/Life/Sports";
import Culture from "./components/Life/Culture";
import Happy from "./components/Life/Happy";

import SEDG from "./components/Life/SEDG";
import News from "./components/Happening/News";
import Blogs from "./components/Happening/Blogs";
import NewsLetter from "./components/Happening/NewsLetter";
import Circulars from "./components/Happening/Circulars";
import Media from "./components/Happening/Media";
import Reports from "./pages/Reports";
import Guidelines from "./pages/Guidelines";
import Administration from "./pages/Administration";
import CentralFacilities from "./pages/Centralfacilities";
import BeliefSection from "./pages/BeliefSection";
import Niilmfoundation from "./pages/NiilmFoundation";

import LearningEcosystem from "./pages/LearningEcosystem";
import Designyourowndegree from "./pages/Designyourowndegree";
import IndustrySection from "./pages/IndustrySection";

  import SkillingPage from "./pages/SkillingPage";
import CampusLogin from "./pages/CampusLogin";
import Payment from "./pages/Payment";
import CurrentInfoSection from "./components/schoolspage/current-info/CurrentInfoSection";
import CurriculumSection from "./components/schoolspage/curriculum/CurriculumSection";
import RecognitionPage from "./pages/RecognitionPage";
import UndergraduatePage from "./pages/UndergraduatePage";
import PostgraduatePage from "./pages/PostgraduatePage";
import AdmissionProcessPage from "./pages/AdmissionProcessPage";
import ScholarshipPage from "./pages/ScholarshipPage";
import EligibilityPage from "./pages/EligibilityPage";
import AwardsPage from "./pages/AwardsPage";
import ExpertsPage from "./pages/ExpertsPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import LeadershipPage from "./pages/LeadershipPage";
import WhyNiilmPage from "./pages/WhyNiilmPage";
import NSS from "./components/Life/NSS";


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schools/:schoolId" element={<SchoolsPage />} />
       
        <Route path="/evaluation" element={<EvaluationPage />} />
        <Route
          path="/skills-in-higher-education"
          element={<SkillsInHigherEducationPage />}
        />
 {/*School Pages*/ }

 <Route path='/Currentinfo' element={<CurrentInfoSection/>}/>
 <Route path='/curriculum' element={<CurriculumSection/>}/>

 <Route path='/undergraduate' element={<UndergraduatePage/>}/>
 <Route path='/Postgraduate' element={<PostgraduatePage/>}/>
 <Route path="/AdmissionProcessPage" element={<AdmissionProcessPage/>}/>
 <Route path="/Scholarship" element={<ScholarshipPage/>}/>
 <Route path="/Eligibility" element={<EligibilityPage/>}/>
 <Route path="/awards" element={<AwardsPage/>}/>
 <Route path="/learningwithindustry" element={<LearningWithIndustryPage/>}/>
<Route path='/Leadership' element={<LeadershipPage/>}/>
<Route path="/infrastructure" element={<InfrastructurePage/>}/>
 

 <Route path='/expertsandmentors' element={<ExpertsPage/>}/>
 <Route path='/Academics/Abc' element={<Abc/>}/>
 <Route path='/Academics/Nep' element={<NEP/>}/>
 <Route path='/Academics/Rnd' element={<Rnd/>}/>
 <Route path='/Academics/Student' element={<Student/>}/>
 <Route path='/Life/Sports' element={<Sports/>}/>
 <Route path='/Life/Culture' element={<Culture/>}/>
 <Route path='/Life/Happy' element={<Happy/>}/>

 <Route path='/Life/NSS' element={<NSS/>}/>
 <Route path='/Life/SEDG' element={<SEDG/>}/>
 <Route path="/Happening/News" element={<News/>}/>
 <Route path="/Happening/Blogs" element={<Blogs/>}/>
 <Route path="/Happening/NewsLetter" element={<NewsLetter/>}/>
 <Route path="/Happening/Circulars" element={<Circulars/>}/>
 <Route path="/Happening/Media" element={<Media/>}/>
 <Route path="/resources/reports" element={<Reports/>}/>
 <Route path="/resources/guidelines" element={<Guidelines/>}/>
 <Route path="/administration" element={<Administration/>}/>
 <Route path="/central-facilities" element={<CentralFacilities/>}/>
 <Route path="/Webelieve" element={<BeliefSection/>}/>
 <Route path="/Niilmuniversity" element={<Niilmfoundation/>}/>
 <Route path="/learning-ecosystem" element={<LearningEcosystem/>}/>
 
  <Route path ="/design-degree" element ={<Designyourowndegree/>}/>
  <Route path="/Industry" element = {<IndustrySection/>}/>
<Route path="/Skilling" element = {<SkillingPage/>}/>

<Route path="/campus-login" element={<CampusLogin/>}/>

<Route path="/pay-fee" element={<Payment/>}/>
<Route path="/LeadershipPage" element={<LeadershipPage/>}/>
<Route path="/RecognitionPage" element={<RecognitionPage/>}/>
<Route path="/pages/WhyNiilmPage" element={<WhyNiilmPage/>}/>
      </Routes>
      

    </BrowserRouter>
  
  );
};

export default App;
