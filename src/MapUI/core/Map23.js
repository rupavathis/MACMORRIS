import React from 'react';
import DeckGL from 'deck.gl';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useRef } from "react";
import "./Map.scss";
import InfoBar from '../tabs/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BitmapLayer, IconLayer } from '@deck.gl/layers';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';
import { TerrainLayer } from '@deck.gl/geo-layers';
import Pointer from '../../images/pointer.svg'



const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicnVwYXZhdGhpIiwiYSI6ImNrdTRsZXAyOTE1M3IycXFrNHdjMWNiaDYifQ.CbNM214i-6-BZrn_uVIYCg';

let countingSites = []

// //Terrain layer

const TERRAIN_IMAGE = `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.png?access_token=${MAPBOX_ACCESS_TOKEN}`;
const SURFACE_IMAGE = `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=${MAPBOX_ACCESS_TOKEN}`;

const ELEVATION_DECODER = {
  rScaler: 6553.6,
  gScaler: 25.6,
  bScaler: 0.1,
  offset: -10000
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


function MapContainer({ sites, siteTypes, mapStyle, historicMap, countSites, setHoverInfo }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [tabClose, setTabClose] = useState(false);

  const INITIAL_VIEW_STATE = {
    longitude: -8.625,
    latitude: 52.258,
    zoom: 7,
    maxZoom: 20,
    pitch: 30,
    bearing: 0
  };

  function setSiteColor(d) {
    // if (countSites[d.place_id] != 1) return `linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)`;
    if (countSites[d.place_id] != 1) {
      countingSites = [...countingSites,
      {
        place_id: d.place_id,
        site_type_id: d.site_type_id
      }
      ]

      return [0, 0, 0];
    }
    // console.log({countingSites})

    if (d.site_type_id === 1) return [76, 0, 153];
    if (d.site_type_id === 2) return [204, 204, 0];
    if (d.site_type_id === 3) return [0, 0, 180];
    if (d.site_type_id === 4) return [255, 128, 0];
    if (d.site_type_id === 5) return [255, 0, 0];
    if (d.site_type_id === 6) return [229, 242, 229];
    if (d.site_type_id === 7) return [0, 153, 0];
  }
  let hoverInfo = {};

  const expandTooltip = info => {
    setHoverInfo(info);
    hoverInfo = info;
    console.log("im in hoverInfo")
    setTabClose(true);
  };

  // const getTooltipInfo = (object) => {
  //   console.log({object})
  //   if (object && countSites[object.place_id] != 1)
  //     return object && `${object.place.name} - ${countSites[object.place_id]} sites`
  //   return object && `${object.place.name}`
  // }

  function getTooltipInfo({ object }) {
    if (!object) {
      return null;
    }
    const count = object.points.length;
    const place = object.points[0].source.place.name
    console.log({ place })

    return `\
      ${place} - ${count} sites`;
  }

  return (
    <>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        effects={[lightingEffect]}
        // getTooltip={({ object }) => getTooltipInfo(object)}
        getTooltip={getTooltipInfo}>

        <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle={mapStyle} />
        {historicMap === "munster" && <BitmapLayer id='bitmap-layer' bounds={[-10.927044, 51.482099, -8.142172, 52.657056]}
          image={'/images/Munster.tiff'} />}
        <IconLayer
          id='IconMapLayer'
          data={sites}
          getColor={d => setSiteColor(d)}
          getIcon={d => 'marker'}
          getPosition={d => [d.place.longitude, d.place.latitude]}
          getSize={d => 4}
          iconAtlas={Pointer}
          iconMapping={{
            marker: {
              x: 0,
              y: 0,
              width: 23,
              height: 25,
              anchorY: 30,
              mask: true
            }
          }}
          sizeScale={8}
          pickable={true}
          autoHighlight={true}
          highlightColor={[0, 0, 128, 128]}
          onClick={expandTooltip}
        />

        {/* <HexagonLayer
          id='HexagonLayer'
          data={sites}
          getColor={d => setSiteColor(d)}
          // getIcon={d => 'marker'}
          getPosition={d => [d.place.longitude, d.place.latitude]}
          // getSize={d => 4}        
          elevationRange={[0, 50000]}
          elevationScale={sites && sites.length ? 1 : 0}
          extruded={true}
          pickable={true}
          radius={2000}
          material={material}
          // upperPercentile={100}
          onClick={expandTooltip}
        // transitions= {
        //   elevationScale= 50000
        // }
        />  */}

        {/* <TerrainLayer
        id='terrain'
        minZoom={0}
        maxZoom={23}
        strategy='no-overlap'
        elevationDecoder={ELEVATION_DECODER}
        elevationData={TERRAIN_IMAGE}
        texture={SURFACE_IMAGE}
        wireframe={false}
        color={[255, 255, 255]}
      />  */}

        {/* {Object.keys(hoverInfo).length != 0 && tabClose && <InfoBar info={hoverInfo.object} countSites={countSites}
          sites={sites} setTabClose={setTabClose} />} */}
      </DeckGL>

    </>

  )
}

export default MapContainer;
