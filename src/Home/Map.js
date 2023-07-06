import React, { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { BitmapLayer } from '@deck.gl/layers';
import { IconLayer } from '@deck.gl/layers';
import Pointer from '../images/map/pointer1.svg'

// https://stackoverflow.com/questions/65434964/mapbox-blank-map-react-map-gl-reactjs
// added the following 6 lines.
import mapboxgl from 'mapbox-gl';
import { LinearInterpolator } from '@deck.gl/core';


// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const transitionInterpolator = new LinearInterpolator();

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -8.625,
  latitude: 52.258,
  zoom: 7,
  minZoom: 7,
  pitch: 30,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  { sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }
];

export default function MapHome() {
  const [viewState, updateViewState] = useState(INITIAL_VIEW_STATE);
  const rotateCamera = () => updateViewState(v => ({
    ...v,
    bearing: v.bearing + 10,
    transitionDuration: 10000,
    transitionInterpolator,
    onTransitionEnd: rotateCamera,
  }));

  return (
    <DeckGL
      style={{ pointerEvents: 'none' }}
      controller={true}
      // initialViewState={INITIAL_VIEW_STATE}
      initialViewState={viewState}
      onLoad={rotateCamera}
      onViewStateChange={v => updateViewState(v.viewState)}
    >
      <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/rupavathi/cler81od4001j01ouv4zi8j9w' />

      <BitmapLayer id='bitmap-layer' bounds={[-11.333592, 50.959666, -6.321837, 53.307926]}
        image={'/images/map/munster_rotated.webp'} />

      {/* <IconLayer
        id='IconMapLayer'
        data={[{ latitude: 52.2583055555555, longitude: -7.119 }, {
          latitude: 52.565,

          longitude
            :
            -9.49453
        }]}
        getColor={d => [76, 0, 153]}
        getIcon={d => 'marker'}
        getPosition={d => [d.longitude, d.latitude]}
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
      /> */}

    </DeckGL>
  );
}
