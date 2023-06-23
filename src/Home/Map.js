import React from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// https://stackoverflow.com/questions/65434964/mapbox-blank-map-react-map-gl-reactjs
// added the following 6 lines.
import mapboxgl from 'mapbox-gl';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -8.625,
  latitude: 52.258,
  zoom: 7,
  maxZoom: 20,
  pitch: 30,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  { sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }
];

export default function MapHome() {
  const layers = [
    new LineLayer({ id: 'line-layer', data })
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/rupavathi/cler81od4001j01ouv4zi8j9w' />
    </DeckGL>
  );
}
