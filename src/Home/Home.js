
import Banner from "./Banner1";
import Intro from "./Intro";
import Viz from "./Viz";
import CaseStudies from "./CaseStudies";
import Team from "./Team";
import Tweet from "./Tweet";
import Footer from "./Footer";
import CaseStudiesIrish from "./CaseStudiesIrish";
import { useState } from 'react';
import Header from "./Header";
import Sponsors from "./Sponsors";
import About from './About';
import TeamIrish from './TeamIrish';
import Search from './Search';
import Publications from "./Publications";


function Home({ setOpenNetwork, changeIrish, setSelectedCS, setRemoveHeader, setChangeIrish }) {

   const [about, setAbout] = useState(false)
   return (
      <>
         <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} setAbout={setAbout}/>
         {about && <About about={about} setAbout={setAbout}/>}
         {!about && <Banner />}
         {!about && <Intro changeIrish={changeIrish} setAbout={setAbout} about={about}/>}
         {!about && <Viz changeIrish={changeIrish} setRemoveHeader={setRemoveHeader} />}
         {!about && !changeIrish && <CaseStudies setSelectedCS={setSelectedCS} />}
         {!about && changeIrish && <CaseStudiesIrish />}
         {!about && !changeIrish && <Team />}
         {!about && changeIrish && <TeamIrish />}
         {!about && <Publications />}
         {!about && <Tweet />}    
         {!about && <Sponsors />}
      </>
   );
}

export default Home;
