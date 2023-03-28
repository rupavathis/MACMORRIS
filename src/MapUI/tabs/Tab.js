import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './tabs.scss';
import { FormatColorTextSharp } from '@material-ui/icons';
import clsx from 'clsx';
import {
  Link
} from "react-router-dom";
import Site from '../../Sites/Index';
import './filter.scss';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ImageModal from './ImageModal'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabInfo({ info, countSites, sites, setShowImage, showImage, showCard, setShowCard }) {

  const [modalShow, setModalShow] = React.useState(false);

  const [isExpandSection, setIsExpandSection] = useState(true);

  const image = info.place.location;


  // console.log("image", image)

  const [value, setValue] = React.useState(0);
  const [newValue, setNewValue] = React.useState(0);
  // const [imageModal, setImageModal] = useState(false);



  console.log("hover", { info, sites })

  console.log("value", value)

  useEffect(() => {
    console.log("use efect", value)
    setValue(0);
  }, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function noOfTabs() {
    console.log("place", countSites[info?.place_id])
    const countArr = Array.from(Array(countSites[info?.place_id])).map((e, i) => i + 1)
    console.log("count arr", countArr.length, "value", value)

    if (countArr.length < value) setValue(0)
    return countArr.map((c) => { console.log("count", c); return <Tab label={c} {...a11yProps(c)} /> })
  }

  function showTabPanelInfo() {

    const sitesInfo = sites.filter((site) => site.place_id === info?.place_id)
    console.log("sitesInfo", sitesInfo);
    let indexCount = -1;


    const expandSection = () => {
      console.log("expand section")
      setIsExpandSection(!isExpandSection)
    }


    return (
      sitesInfo.map((site) => {
        indexCount = indexCount + 1;
        console.log("indexCount", indexCount, value, site)

        return <TabPanel value={value} index={indexCount}>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <div className='list-header'>Title(s)</div>
              <Card.Text style={{ paddingTop: 20 }}>
                <div>{site.name}</div>
                <div>{site.gaelic_name}</div>
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='list-header'>Text</div>
              <Card.Text style={{ paddingTop: 20 }}>
                {isExpandSection && <div className='collapse-content'>
                  <div className="two-lines">{site.description}
                  </div>
                  <Link className='link' to={`/site/${site.id}`} target="_blank" rel="noopener noreferrer">Read More/Translate</Link>
                </div>}
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='list-header'>Connected People</div>
              <Card.Text style={{ paddingTop: 20 }}>
                {site.person_id.map((p) =>
                (<div><Link className='link' target="_blank" rel="noopener noreferrer" to={`/profile/${p.macmorris_id}`}>{p.name}</Link></div>
                ))}
              </Card.Text>
            </ListGroup.Item>
          </ListGroup>
        </TabPanel>
        // return <TabPanel value={value} index={indexCount}>
        //   <div className="info-wrapper">
        //     <div className="filter-container">
        //       <div className='filter-body'>
        //         <div className='section-info'>
        //           <div className='collapsible'>
        //             <div className='collapse-icon-wrapper'>
        //               <div className='collapse-header'>
        //                 <div className='icon hoverable' onClick={() => expandSection()}>
        //                   <FontAwesomeIcon icon={faChevronRight} className={clsx("turn-icon", { "active": isExpandSection })} />
        //                 </div>
        //                 <div className='title'>
        //                   Description
        //                 </div>
        //                 <div className='header-end-wrapper'>
        //                 </div>
        //               </div>
        //               {isExpandSection && <div className='collapse-content'>
        //                 <div className='hline'>
        //                   {site.description}
        //                 </div>
        //                 <Link className='link' to={`/site/${info.id}`} target="_blank" rel="noopener noreferrer">Read More/Translate</Link>
        //               </div>}
        //             </div>
        //           </div>
        //           {/* <div>{site.name}</div>
        //   <div>{site.gaelic_name}</div>
        //   <hr />
        //   <div className="two-lines">{site.description}
        //   </div>
        //   <Link className='link' to={`/site/${info.id}`} target="_blank" rel="noopener noreferrer">Read More/Translate</Link>
        //   <hr />
        //   <div>People Connected </div>
        //   {site.person_id.map((p) =>
        //   (<div><Link className='link' to={`/profile/${p.id}`}>{p.name}</Link></div>
        //   ))} */}
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </TabPanel>
      }))
  }

  return (
    <div className='tab-wrapper'>
      {showCard && <Card style={{ width: '22rem' }}>
        <div class="card-wrapper">
          <Card.Title style={{ paddingTop: 5, flexGrow: 1, textAlign: 'center' }}>{info.place.name} </Card.Title>
          <FontAwesomeIcon icon={faCircleInfo} style={{ marginRight: '5px' }} onClick={() => setModalShow(!modalShow)} />
          <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#a22828", marginRight: '10px' }} onClick={() => setShowCard(false)} />
          {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" style={{ color: "#d22d2d" }} /> */}
        </div>

        {showImage && <Card.Img variant="top"
          src={`/images/map/places/${image}.jpg`}
          onError={() => setShowImage(null)} />}


        {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        {/* <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto">
          {noOfTabs()}
        </Tabs>
        {/* </Box>
          </Box> */}
        {showTabPanelInfo()}
      </Card>}
      {modalShow && <ImageModal setModalShow={setModalShow} modalShow={modalShow} placeID={info?.place?.location} />}
    </div>
  );
}
