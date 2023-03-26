
import Banner from "./Banner";
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

function Home({ setOpenNetwork, changeIrish, setSelectedCS, setRemoveHeader, setChangeIrish }) {
   return (
      <>
         <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />
         <Banner />
         <Intro changeIrish={changeIrish} />
         <Viz changeIrish={changeIrish} setRemoveHeader={setRemoveHeader} />
         {!changeIrish && <CaseStudies setSelectedCS={setSelectedCS} />}
         {changeIrish && <CaseStudiesIrish />}
         <Team />
         {/* <Tweet /> */}
         <Sponsors />
      </>
   );
}

export default Home;
