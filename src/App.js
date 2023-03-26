import Home from './Home/Home';
import { useState } from 'react';
import PreLoader from "./Home/PreLoader";
import Header from "./Home/Header";
import CaseStudyText from './CaseStudyText';
import { Routes, Route } from 'react-router-dom';
import Search from './Search/Index.js';
import Network from './NetworkUI/index';
import CaseHistoricOverview from "./CaseStudies/CaseHistoricOverview";
import CaseGaelic from './CaseStudies/CaseGaelic';
import CaseDeepMap from './CaseStudies/CaseDeepMap';
import CaseEarlyModernDrama from './CaseStudies/CaseEarlyModernDrama';
import CaseBardic from './CaseStudies/CaseBardic';
import CaseMunster from './CaseStudies/CaseMunster';
import CaseNetworkingWomen from './CaseStudies/CaseNetworkingWomen';
import Profile from './Profile/Home'
import Map from './MapUI/Home'
import Site from './Sites/Index'
import About from './Home/About';
import Work from './WorksUI/Home';

function App() {

  const [openNetwork, setOpenNetwork] = useState(false);
  const [changeIrish, setChangeIrish] = useState(false);
  const [removeHeader, setRemoveHeader] = useState(true);

  // const [selectedCS, setSelectedCS] = useState("")

  return (
    <div className="App">
      {/* <PreLoader /> */}
      
      <Routes>
        <Route path='/' element={<Home changeIrish={changeIrish} setChangeIrish={setChangeIrish} 
          setRemoveHeader={setRemoveHeader}
        />} />
        <Route path='/historical-overview' element={<CaseHistoricOverview changeIrish={changeIrish} setChangeIrish={setChangeIrish} />} />
        <Route path='/networking-women' element={<CaseNetworkingWomen changeIrish={changeIrish} setChangeIrish={setChangeIrish} />} />
        <Route path='/spenser-in-munster' element={<CaseMunster changeIrish={changeIrish} setChangeIrish={setChangeIrish} />} />
        <Route path='/using-gaelic-sources' element={<CaseGaelic changeIrish={changeIrish} setChangeIrish={setChangeIrish} />} />
        <Route path='/early-modern-drama' element={<CaseEarlyModernDrama changeIrish={changeIrish} setChangeIrish={setChangeIrish} />} />
        <Route path='/deep-mapping' element={<CaseDeepMap changeIrish={changeIrish} setChangeIrish={setChangeIrish} />} />
        <Route path='/what-is-bardic-poetry' element={<CaseBardic changeIrish={changeIrish} setChangeIrish={setChangeIrish} />} />
        <Route path='/search' element={<Search changeIrish={changeIrish} setChangeIrish={setChangeIrish} />} />
        <Route path='/map' element={<Map />} />
        <Route path='/map/*' element={<Map />} />
        <Route path="/profile/*" element={<Profile changeIrish={changeIrish} setChangeIrish={setChangeIrish} />} />
        <Route path="/site/*" element={<Site changeIrish={changeIrish} setChangeIrish={setChangeIrish} />} />
        <Route path="/network/" element={<Network />} />
        <Route path="/networkWithId/*" element={<Network />} />
        {/* <Route path="/about-us/" element={<About />} /> */}
        <Route path='/works/*' element={<Work />} />

      </Routes>
    </div>
  );
}

export default App;
