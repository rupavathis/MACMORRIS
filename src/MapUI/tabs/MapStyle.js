import React from 'react';
import './tabs.scss';

function MapStyle({setMapStyle}) {
    return (
        <div className="map-style">
            <div className="map-style-list" onClick={() => setMapStyle('mapbox://styles/mapbox/satellite-v9')}>
                <img className="map-style-image" src='/images/map/terrainstyle.png' />
            </div>
            <div className="map-style-list" onClick={() => setMapStyle('mapbox://styles/mapbox/dark-v11')}>
                <img className="map-style-image" src='/images/map/darkstyle.png' />
            </div>
            <div className="map-style-list" onClick={() => setMapStyle('mapbox://styles/rupavathi/clf0c3up6003l01mdfutm3sz7')}>
                <img className="map-style-image" src='/images/map/caliterrain.png' />
            </div>
        </div>

    )

}

export default MapStyle;

