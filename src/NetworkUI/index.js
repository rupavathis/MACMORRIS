import React from 'react';
import { useEffect, useState } from "react";
import PanelLeft from './panels/PanelLeft';
import PanelRight from './panels/PanelRight'
import PanelContent from './panels/PanelContent';
import PanelTop from './panels/PanelTop';
import { useNavigate } from 'react-router-dom'

function Network() {

  const history = useNavigate()
  const [id, setId] = useState(-1);


  useEffect(() => {
    console.log("In network page")

    if (document.URL.includes('/networkWithId')) {
      const url = document.URL;
      const id = url.substring(url.lastIndexOf('/'));
      console.log(id, id);
      setId(id);
      console.log("in useeffect if", id);

    }
    console.log(id);
  }, [history])




  const [networkData, setNetworkData] = useState([]);
  const [workNetworkData, setWorkNetworkData] = useState([]);
  const [selectedColor, setSelectedColor] = useState({ node1: "#F30A23", node2: "#6547BB", node3: "D0793E" })
  const [selectedSize, setSelectedSize] = useState({ node1: 1, node2: 0.5, node3: 0.2})
  const [selectedLabelSize, setSelectedLabelSize] = useState({ node1: 50, node2: 50, node3: 50 })
  const [show3DText, setShow3DText] = useState(true);
  const [tab, setTab] = useState("show-search")
  const [selectContent, setSelectContent] = React.useState(0);
  const [displayNames, setDisplayNames] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const settings = [{ ...selectedColor }, { ...selectedSize }, { ...selectedLabelSize }, { show3DText }]

  return (
    <div className='network-wrapper'>
      <div className='core-wrapper'>
        <PanelLeft setNetworkData={setNetworkData} setWorkNetworkData={setWorkNetworkData} setSelectedColor={setSelectedColor}
          setSelectedSize={setSelectedSize} selectedColor={selectedColor} setSelectedLabelSize={setSelectedLabelSize}
          setShow3DText={setShow3DText} show3DText={show3DText}
          tab={tab} setTab={setTab} setSelectContent={setSelectContent} setDisplayNames={setDisplayNames}
          displayNames={displayNames} setLoading={setLoading} id={id} />
        <PanelTop />
        
        <PanelContent networkData={networkData} workNetworkData={workNetworkData} selectedColor={selectedColor} selectedSize={selectedSize}
          settings={settings} tab={tab} setTab={setTab} selectContent={selectContent} show3DText={show3DText}
          displayNames={displayNames} loading={loading} />
      </div>
    </div>
  )
}

export default Network;
