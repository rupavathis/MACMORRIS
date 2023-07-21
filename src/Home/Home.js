
import Banner from "./Banner1";
import Intro from "./Intro";
import Intro2 from "./Intro2";
import Viz from "./Viz";
import CaseStudies from "./CaseStudies";
import Team from "./TeamClean";
import Tweet from "./Tweet";
import Footer from "./Footer";
import CaseStudiesIrish from "./CaseStudiesIrish";
import { useState } from 'react';
import Header from "./Header1";
import Sponsors from "./Sponsors";
import About from './About';
import Search from './Search';
import Publications from "./Publications";


function Home({ setOpenNetwork, changeIrish, setSelectedCS, setRemoveHeader, setChangeIrish }) {

   const [about, setAbout] = useState(false)
   return (
      <>
         <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} setAbout={setAbout} />
         {about && <About about={about} setAbout={setAbout} />}
         {!about && <Banner changeIrish={changeIrish} />}
         {!about && <Intro changeIrish={changeIrish} setAbout={setAbout} about={about} />}
         {!about && <Intro2 changeIrish={changeIrish} setAbout={setAbout} about={about} />}
         {!about && <Viz changeIrish={changeIrish} setRemoveHeader={setRemoveHeader} />}
         {!about && !changeIrish && <CaseStudies setSelectedCS={setSelectedCS} />}
         {!about && changeIrish && <CaseStudiesIrish />}
         {!about && <Team changeIrish={changeIrish} />}
         {!about && <Publications changeIrish={changeIrish} />}
         {!about && <Tweet changeIrish={changeIrish} />}
         {!about && <Sponsors />}
      </>
   );
}

export default Home;
