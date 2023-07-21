import React, { useEffect, useRef, useState } from 'react';
import './home.scss'
import { Opacity } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Banner({ changeIrish }) {

   const [activeItem, setActiveItem] = useState(4);

   return (
      <div className='accordian-wrapper'>
         <div className="accordion accordion--row">
            <HashLink
               to="/#our-publications"
               className={`accordion__item ${activeItem === 1 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(1)}
               onMouseLeave={() => setActiveItem(4)}
            >
               <div className="cbp-item dark_overlay" style={{ width: '100%', height: '100%', margin: 0 }}>
                  <img src="/images/banner/about.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', border: 0 }} />
                  <div className="overlay-accordion overlay center-block whitecolor" >
                     {activeItem === 1 && <div className="accordion__text">
                        <div className="nav-item active">
                           {!changeIrish ? <div className="whitecolor">Publications</div> :
                              <div className="whitecolor">Foilsiúcháin</div>}
                        </div>
                     </div>
                     }
                  </div>
               </div>
            </HashLink>
            <HashLink to="/#our-viz-search"
               className={`accordion__item ${activeItem === 2 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(2)}
               onMouseLeave={() => setActiveItem(4)}
            >

               <div className="cbp-item dark_overlay" style={{ width: '100%', height: '100%', margin: 0 }}>
                  <img src="/images/banner/search.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', border: 0 }} />
                  <div className="overlay-accordion overlay center-block whitecolor">
                     {activeItem === 2 && <div className="accordion__text">
                        <div className="nav-item active">
                           {!changeIrish ? <div className="whitecolor">Search</div> :
                              <div className="whitecolor">Cuardaigh</div>}
                        </div>
                     </div>
                     }
                  </div>
               </div>

            </HashLink>

            <HashLink to="/#our-viz-network"
               className={`accordion__item ${activeItem === 3 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(3)}
               onMouseLeave={() => setActiveItem(4)}
            >
               <div className="cbp-item dark_overlay" style={{ width: '100%', height: '100%', margin: 0 }}>

                  <img src="/images/banner/network.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', border: 0 }} />

                  <div className="overlay-accordion overlay center-block whitecolor">
                     {activeItem === 3 && <div className="accordion__text">
                        <div className="nav-item active">
                           {!changeIrish ? <div className="whitecolor" to="/#about-us">Networks</div> :
                              <div className="whitecolor" to="/#about-us">Líonraí</div>}
                        </div>
                     </div>
                     }
                  </div>
               </div>
            </HashLink>

            <HashLink to="/#about-us"
               className={`accordion__item ${activeItem === 4 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(4)}
               onMouseLeave={() => setActiveItem(4)}
            >
               <div className="cbp-item dark_overlay" style={{ width: '100%', height: '100%', margin: 0 }}>
                  <img src="/images/banner/publications.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', border: 0 }} />
                  <div className="overlay-accordion overlay center-block whitecolor" to="/#our-publications">
                     {activeItem === 4 && <div className="accordion__text">
                        <div className="nav-item active">
                           {!changeIrish ? <div className="whitecolor">What is MACMORRIS</div> :
                              <div className="whitecolor">Cad atá i gceist le MACMORRIS?</div>}
                        </div>
                     </div>
                     }
                  </div>
               </div>
            </HashLink >


            <HashLink to="/#our-viz-map"
               className={`accordion__item ${activeItem === 5 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(5)}
               onMouseLeave={() => setActiveItem(4)}
            >
               <div className="cbp-item dark_overlay" style={{ width: '100%', height: '100%', margin: 0 }}>
                  <img src="/images/banner/map.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', border: 0 }} />
                  <div className="overlay-accordion overlay center-block whitecolor">
                     {activeItem === 5 && <div className="accordion__text">
                        <div className="nav-item active">
                           {!changeIrish ? <div className="whitecolor">Map</div> :
                              <div className="whitecolor">Léarscáil</div>}
                        </div>
                     </div>
                     }
                  </div>
               </div>
            </HashLink>
            <HashLink to="/#our-casestudies"
               className={`accordion__item ${activeItem === 6 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(6)}
               onMouseLeave={() => setActiveItem(4)}
            >

               <div className="cbp-item dark_overlay" style={{ width: '100%', height: '100%', margin: 0 }}>
                  <img src="/images/banner/resources.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', border: 0 }} />
                  <div className="overlay-accordion overlay center-block whitecolor">
                     {activeItem === 6 && <div className="accordion__text">
                        <div className="nav-item active">
                           {!changeIrish ? <div className="whitecolor" to="/#about-us">Resources</div> :
                              <div className="whitecolor" to="/#about-us">

                                 Acmhainní




                              </div>}
                        </div>
                     </div>
                     }
                  </div>

               </div>
            </HashLink>
         </div>
      </div>
   );

}

export default Banner;
