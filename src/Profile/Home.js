import React, { useEffect, useState, useCallback } from 'react';
import Title from './TitleBar/Title'
import ContentBar from './ContentBar/ContentBar.js'
import Roles from './ContentBar/Roles.js';
import './home.css';
import { useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../constants';


function Home() {
  // console.log("ID", id)
  // if (id == null)
  // id = 3190;
  // id = 150;
  const [id, setId] = useState(-1);


  const [authorName, setAuthorName] = useState("");
  const history = useNavigate()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log("In profile page")

    if (document.URL.includes('/profile')) {
      const url = document.URL;
      const id = url.substring(url.lastIndexOf('/') + 1);
      console.log(id, id);
      setId(id);
    }
    console.log(id);
  }, [history])

  useEffect(() => {
    if (id != -1) {
      fetchData(id);

    }
  }, [id]);

  const [bioInfo, setBioInfo] = useState([]);
  const [roles, setRoles] = useState([]);
  const [sources, setSources] = useState([]);
  const [works, setWorks] = useState([]);
  const [connections, setConnections] = useState([]);
  const [sites, setSites] = useState([]);


  const fetchData = useCallback(async (id) => {
    setLoading(true)
    const url = `${API_URL}/profile/${id}`
    console.log({ url })
    const res = await fetch(url);
    console.log({ res });



    const urlConn = `${API_URL}/people/${id}/connections`;
    const connectionsRes = await fetch(urlConn);
    console.log({ urlConn })
    const connectionsResJson = await connectionsRes.json();
    console.log("connections1234", { connectionsResJson })
    setConnections(connectionsResJson);

    const urlSite = `${API_URL}/people/${id}/sites`
    console.log({ urlSite })
    const resSite = await fetch(urlSite);
    const siteJson = await resSite.json();
    console.log("sites123", { siteJson })
    setSites(siteJson);

    const resJson = await res.json();
    setBioInfo(resJson);
    setAuthorName(resJson.display_name)
    console.log({ resJson });
    const attrib = resJson.attribs;
    console.log({ attrib });

    const roles = await attrib.map((a) => { return a.name });
    // const roles = "summa"
    setRoles(roles);
    console.log(roles);
    const sources = [];
    sources.push(resJson.odnb_id);
    sources.push(resJson.dib_id);
    sources.push(resJson.tnop_id);
    sources.push(resJson.wikidata_id);
    sources.push(resJson.ainm_id);
    sources.push(resJson.sdfb);
    // console.log(sources);
    console.log("ESources", { resJson }, { sources })

    setSources(sources);


    const url1 = `${API_URL}/people/${id}/works`
    const workRes = await fetch(url1);
    console.log({ url1 })
    const workResJson = await workRes.json();
    console.log({ workResJson });


    let worksRes = workResJson.reduce((ac, a) => ac.find(x => x.id === a.id) ? [...ac] : [...ac, a], []);
    setWorks(worksRes)


    setLoading(false)


  }, [])

  return (
    <div className="Profile">
      <div className="top-panel">
        <Link to='/' href="index.html">
          <img style={{
            objectFit: 'contain', 'width': '200px', height: '80px', margin: '10px',
            opacity: '0.8'
          }} alt="" src="/images/logos/macmorris.png" />
        </Link>
      </div>


      <h1 className='Title'><Title author={authorName} /></h1>
      {/* {loading && <div> Loading </div>} */}
      <>
        <div><Roles roles={roles} /></div>
        <div className='ContentBar'>
          <ContentBar bioInfo={bioInfo} roles={roles} sources={sources} connections={connections} works={works} sites={sites} />
        </div>
      </>
    </div>

  );
}

export default Home;
