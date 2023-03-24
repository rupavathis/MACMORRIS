
import CaseHistoricOverview from "./CaseStudies/CaseHistoricOverview";
import CaseGaelic from './CaseStudies/CaseGaelic';
import CaseDeepMap from './CaseStudies/CaseDeepMap';
import CaseEarlyModernDrama from './CaseStudies/CaseEarlyModernDrama';
import CaseBardic from './CaseStudies/CaseBardic';
import CaseMunster from './CaseStudies/CaseMunster';
import CaseNetworkingWomen from './CaseStudies/CaseNetworkingWomen'; 

function CaseStudyText({selectedCS}) {

   return (
    <div className="CaseStudyText">
      {selectedCS === "historic-overview" && <CaseHistoricOverview />}
      {selectedCS === "gaelic" && <CaseGaelic />}
      {selectedCS === "bardic" && <CaseBardic />}
      {selectedCS === "deep-map" && <CaseDeepMap />}
      {selectedCS === "modern-drama" && <CaseEarlyModernDrama />}
      {selectedCS === "munster" && <CaseMunster />}
      {selectedCS === "network-women" && <CaseNetworkingWomen />}
    </div>
  );
}

export default CaseStudyText;
