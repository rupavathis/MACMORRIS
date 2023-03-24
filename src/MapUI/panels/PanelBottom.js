import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import About from '../tabs/About';
import MapStyle from '../tabs/MapStyle';
import { useState } from 'react';
import './Panel.scss';
import clsx from 'clsx'


function PanelBottom({ showFilter, setShowFilter, setMapStyle }) {
    const [showAbout, setShowAbout] = useState(false);
    const [showMapStyle, setShowMapStyle] = useState(false);

    return (
        <>
            <div className='icon-wrapper' onClick={() => setShowAbout(!showAbout)}>
                {showAbout && <About />}
                <FontAwesomeIcon icon={faCircleQuestion} />

            </div>
            <div className='icon-wrapper' onClick={() => setShowFilter(!showFilter)} >
                <FontAwesomeIcon icon={faLayerGroup} />
            </div>
            <div className='icon-wrapper-2' onClick={() => setShowMapStyle(!showMapStyle)}>
                <FontAwesomeIcon icon={faMap} />
            </div>
            <div className={clsx("show-styles", { "active": showMapStyle })}>
                <MapStyle setMapStyle={setMapStyle} />
            </div>
            
        </>
    )
}
export default PanelBottom;

