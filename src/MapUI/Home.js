import React from 'react';
import { useEffect, useState } from "react";
import './style.css'
import './home.scss'
import Map from './core/Map';
import Panel from './panels/Panel';
import globe from '../images/map/globe.gif';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const darkStyle = 'mapbox://styles/rupavathi/clf0c3up6003l01mdfutm3sz7';

function Home() {
  const [sites, setSites] = React.useState([]);
  const [siteTypes, setSiteTypes] = React.useState([]);
  const [filteredSites, setFilteredSites] = React.useState([]);
  const [mapStyle, setMapStyle] = React.useState(darkStyle);
  const [historicMap, setHistoricMap] = React.useState("");
  const [countSites, setCountSites] = React.useState([]);
  const [hoverInfo, setHoverInfo] = useState({});
  const [layer, setLayer] = useState([1]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [showImage, setShowImage] = useState(true)
  const [showCard, setShowCard] = useState(false);

  const history = useNavigate()
  const [id, setId] = useState(0);


  useEffect(() => {
    console.log("In map page")

    if (document.URL.includes('?')) {
      const url = document.URL;
      const searchParams = new URLSearchParams(url.substring(url.lastIndexOf('?')));
      const id = searchParams.get('id');
      console.log(id, id);
      setId(id);
      console.log("in useeffect if", id);
    }
  }, [history])


  const fetchSiteData = async () => {
    const date = new Date
    const sitesRes = await fetch("/sites");
    console.log(sitesRes)
    var sitesJson = await sitesRes.json();
    console.log(sitesJson)
    const siteTypesRes = await fetch("site_types");
    var siteTypesJson = await siteTypesRes.json();
    setSites(sitesJson)
    console.log("out if", { id });

    if (id != 0) {
      console.log("format", { id });
      const filtered = sitesJson.filter(s => s.id === parseInt(id))
      console.log("filtered", { filtered }, sitesJson);
      setFilteredSites(filtered)
    }
    else setFilteredSites(sitesJson);
    setSiteTypes(siteTypesJson)

    console.log("filtered sites 2", filteredSites)


    const countSites = sitesJson.reduce((a, c) => {
      const count = a[c.place_id] ?? 0;
      return { ...a, [c.place_id]: count + 1 }
    }, {})
    console.log({ countSites })
    setCountSites(countSites)

    const countSites1 = sitesJson.reduce((a, c) => {
      const curGroup = a[c.site_type_id] ?? [];
      return { ...a, [c.site_type_id]: [...curGroup, c] }
    }, {})
    console.log({ countSites1 })


    const countSites2 = Object.values(countSites1)
    const s = countSites2.map(d => d.reduce((a, c) => {
      const count = a[c.place_id] ?? 0;
      return { ...a, [c.place_id]: count + 1 }
    }, {}))

    console.log({ s })

    setLoading(false)
  };

  useEffect(() => {
    fetchSiteData();

  }, [])

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setLoading2(false), 2000)
    }
  }, [loading])

  return (
    <div className='map-container'>

      <Map sites={filteredSites} siteTypes={siteTypes} mapStyle={mapStyle} historicMap={historicMap}
        countSites={countSites} setHoverInfo={setHoverInfo} layer={layer} setShowImage={setShowImage} 
        setShowCard={setShowCard} />

      <Panel siteTypes={siteTypes} sites={sites} setFilteredSites={setFilteredSites}
        filteredSites={filteredSites} setMapStyle={setMapStyle} setHistoricMap={setHistoricMap}
        setCountSites={setCountSites} countSites={countSites} hoverInfo={hoverInfo} setLayer={setLayer}
        layer={layer} showImage={showImage} setShowImage={setShowImage} setShowCard={setShowCard} showCard={showCard}/>


      <div className="top-panel">
        <Link to='/' href="index.html">
          <img style={{
            objectFit: 'contain', 'width': '200px', height: '80px', margin: '10px',
            opacity: '0.8'
          }} alt="" src="/images/logos/macmorris.png" />
        </Link>
      </div>

      {loading2 && <div className={clsx('loading-wrapper', { "active": loading })}>
        <img src={globe} alt="globe-gif" style={{ height: '100%', width: 'auto' }} />
      </div>}


    </div>
  );
}

export default Home;

