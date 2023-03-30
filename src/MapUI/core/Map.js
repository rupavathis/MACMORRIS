import React, { useState, useCallback, useEffect } from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IconLayer } from '@deck.gl/layers';
import Pointer from '../../images/map/pointer.svg'
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { AmbientLight, PointLight, LightingEffect, LinearInterpolator } from '@deck.gl/core';
import { TerrainLayer } from '@deck.gl/geo-layers';
import { BitmapLayer } from '@deck.gl/layers';

// https://stackoverflow.com/questions/65434964/mapbox-blank-map-react-map-gl-reactjs
// added the following 6 lines.
import mapboxgl from 'mapbox-gl';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN


// Viewport settings
const INITIAL_VIEW_STATE = {
    longitude: -8.625,
    latitude: 52.258,
    zoom: 7,
    maxZoom: 20,
    pitch: 30,
    bearing: 0
};

//Hexagon layer
const material = {
    ambient: 0.64,
    diffuse: 0.6,
    shininess: 32,
    specularColor: [51, 51, 51]
};

const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 1.0
});

const pointLight1 = new PointLight({
    color: [255, 255, 255],
    intensity: 0.8,
    position: [-0.144528, 49.739968, 80000]
});

const pointLight2 = new PointLight({
    color: [255, 255, 255],
    intensity: 0.8,
    position: [-3.807751, 54.104682, 8000]
});

const lightingEffect = new LightingEffect({ ambientLight, pointLight1, pointLight2 });

//Terrain layer

const TERRAIN_IMAGE = `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.png?access_token=${MAPBOX_ACCESS_TOKEN}`;
const SURFACE_IMAGE = `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=${MAPBOX_ACCESS_TOKEN}`;

const ELEVATION_DECODER = {
    rScaler: 6553.6,
    gScaler: 25.6,
    bScaler: 0.1,
    offset: -10000
};

const transitionInterpolator = new LinearInterpolator();


export default function MapContainer({ sites, siteTypes, mapStyle, historicMap, countSites, setHoverInfo, layer, showImage, setShowImage , setShowCard }) {

    const [tabClose, setTabClose] = useState(false);
    const [iconClick, setIconClick] = useState(false);
    const [viewState, updateViewState] = useState(INITIAL_VIEW_STATE);
    const [showAnimation, setShowAnimation] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => setShowAnimation(false), 1000);
    // }, [])


    // const rotateCamera = useCallback(() => {
    //     console.log('showAnimation', showAnimation);
    //     if (showAnimation)
    //         updateViewState(v => ({
    //             ...v,
    //             bearing: v.bearing + 5,
    //             transitionDuration: 1000,
    //             transitionInterpolator,
    //             onTransitionEnd: () => {
    //                 rotateCamera();
    //                 setShowAnimation(false);
    //             }
    //         }));
    //     // setShowAnimation(false);
    // }, [showAnimation]);

    const rotateCamera = () => updateViewState(v => ({
                ...v,
                bearing: v.bearing + 10,
                transitionDuration: 10000,
                transitionInterpolator,
                // onTransitionEnd: rotateCamera,
            }));

    function setSiteColor(d) {
        let countingSites = []

        if (d.site_type_id === 1) return [76, 0, 153];
        if (d.site_type_id === 2) return [204, 204, 0];
        if (d.site_type_id === 3) return [0, 0, 180];
        if (d.site_type_id === 4) return [255, 128, 0];
        if (d.site_type_id === 5) return [255, 0, 0];
        if (d.site_type_id === 6) return [216, 22, 200];
        if (d.site_type_id === 7) return [0, 153, 0];
    }

    const expandTooltip = info => {
        setHoverInfo(info.object);
        console.log("im in hoverInfo", info)
        setTabClose(true);
        setShowImage(true)
        setShowCard(true)
    };

    const expandHexagon = info => {
        setHoverInfo(info.object.points[0].source);
        console.log("im in hoverInfo", info)
        setTabClose(true);
        setShowImage(true)
        setShowCard(true)
    };

    // const getTooltipInfo = (object) => {
    //     console.log({ object })
    //     if (object && countSites[object.place_id] != 1)
    //         return object && `${object.place.name} - ${countSites[object.place_id]} sites`
    //     return object && `${object.place.name}`
    // }

    function getTooltipInfo({ object }) {
        if (!object) {
            return null;
        }
        if (object.points != undefined) {
            const count = object.points.length;
            const place = object.points[0].source.place.name
            if(count > 1) return `${place} - ${count} texts`;
            else return `${place} - ${count} text`;
        }
        else {
            return object && `${object.place.name}`
        }
    }

    return (
        <>

            <DeckGL
                controller={true}
                initialViewState={viewState}
                onLoad={rotateCamera}
                onViewStateChange={v => updateViewState(v.viewState)}
                effects={[lightingEffect]}
                getTooltip={getTooltipInfo}
            >

                <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                    mapStyle={mapStyle} />


                {layer.includes(1) && <IconLayer
                    id='IconMapLayer'
                    data={sites}
                    getColor={d => setSiteColor(d)}
                    getIcon={d => 'marker'}
                    getPosition={d => [d.place.longitude, d.place.latitude]}
                    getSize={3.5}
                    iconAtlas={Pointer}
                    iconMapping={{
                        marker: {
                            x: 0,
                            y: 0,
                            width: 50,
                            height: 50,
                            anchorY: 50, // set this to half the height
                            mask: true
                        }
                    }}
                    sizeScale={8}
                    pickable={true}
                    autoHighlight={true}
                    highlightColor={[0, 0, 128, 128]}
                    onClick={expandTooltip}
                />
                }
                {layer.includes(2) && <HexagonLayer
                    id='HexagonLayer'
                    data={sites}
                    // getColor={d => setSiteColor(d)}
                    // getIcon={d => 'marker'}
                    getPosition={d => [d.place.longitude, d.place.latitude]}
                    // getSize={d => 4}        
                    elevationRange={[0, 50000]}
                    // elevationScale={sites && sites.length ? 1 : 0}
                    extruded={true}
                    pickable={true}
                    wireframe={true}
                    radius={3000}
                    material={material}
                    // upperPercentile={100}
                    // getElevation={d => }
                    onClick={expandHexagon}
                    transitions={{
                        getElevationValue: {
                          duration: 2000,
                          enter: () => [0]
                        },
                    }}
                />}
                {layer.includes(3) && <TerrainLayer
                    id='terrain'
                    minZoom={0}
                    maxZoom={23}
                    strategy='no-overlap'
                    elevationDecoder={ELEVATION_DECODER}
                    elevationData={TERRAIN_IMAGE}
                    texture={SURFACE_IMAGE}
                    wireframe={false}
                    color={[255, 255, 255]}
                />}

                {historicMap === "munster" && <BitmapLayer id='bitmap-layer' bounds={[-11.333592, 50.959666, -6.321837, 53.307926]}
                    image={'/images/map/munster_rotated.webp'} />}


            </DeckGL>
        </  >
    );
}
