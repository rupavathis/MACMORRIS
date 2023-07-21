import { createBrowserRouter } from "react-router-dom";
import CaseHistoricOverview from "../CaseStudies/CaseHistoricOverview";


const router = createBrowserRouter([
    {
        path: '/historical-overview',
        element: <CaseHistoricOverview />
    }
])

export default router;
