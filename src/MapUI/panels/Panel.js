import React from 'react';
import './Panel.scss';
import About from '../tabs/About';
import PanelBottom from './PanelBottom';
import Filter from '../tabs/Filter';
import { useState } from 'react';
import PanelRight from './PanelRight';
import { Link } from 'react-router-dom';


function Panel({ siteTypes, sites, setFilteredSites, filteredSites, setMapStyle, setHistoricMap, setCountSites,
    hoverInfo, countSites, setLayer, layer }) {

    const [showFilter, setShowFilter] = useState(true);
    return (
        <>
            <div className="top-panel">
                <Link to='/' href="index.html">
                    <img style={{ 'object-fit': 'contain', 'width': '200px', height:'80px', margin: '10px', opacity: '0.8' }} alt="" src="/images/logos/macmorris.png" />
                </Link>
            </div>
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

