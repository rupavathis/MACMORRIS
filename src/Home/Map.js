import React from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicnVwYXZhdGhpIiwiYSI6ImNrdTRsZXAyOTE1M3IycXFrNHdjMWNiaDYifQ.CbNM214i-6-BZrn_uVIYCg';

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
