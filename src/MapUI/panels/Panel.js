import React from 'react';
import './Panel.scss';
import About from '../tabs/About';
import PanelBottom from './PanelBottom';
import Filter from '../tabs/Filter';
import { useState } from 'react';
import PanelRight from './PanelRight';


function Panel({ siteTypes, sites, setFilteredSites, filteredSites, setMapStyle, setHistoricMap, setCountSites,
    hoverInfo, countSites, setLayer, layer }) {

    const [showFilter, setShowFilter] = useState(true);
    return (
        <>
           
            {showFilter && <div className="mid">
                <Filter siteTypes={siteTypes} sites={sites} setFilteredSites={setFilteredSites}
                    filteredSites={filteredSites} setHistoricMap={setHistoricMap}
                    setCountSites={setCountSites} setLayer={setLayer} layer={layer} />
            </div>}
            {Object.keys(hoverInfo).length != 0 && <PanelRight hoverInfo={hoverInfo.object} sites={sites}
                countSites={countSites} />}
            <div className="bottom-panel">
                <PanelBottom showFilter={showFilter} setShowFilter={setShowFilter} setMapStyle={setMapStyle} />
            </div>
        </>

    );

}


export default Panel;

