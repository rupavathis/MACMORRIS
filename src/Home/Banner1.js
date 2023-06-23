import React, { useEffect, useRef, useState } from 'react';
import './home.scss'
import { Opacity } from '@material-ui/icons';

function Banner() {

   const [activeItem, setActiveItem] = useState(3);

   return (
      <>
         <div className="accordion accordion--row">
            <div
               className={`accordion__item ${activeItem === 1 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(1)}
               onMouseLeave={() => setActiveItem(4)}
            >
               <img src="/images/banner/about.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               {activeItem === 1 && <div className="accordion__text">
                  <p>About</p>
               </div>
               }
            </div>
            <div
               className={`accordion__item ${activeItem === 2 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(2)}
               onMouseLeave={() => setActiveItem(4)}
            >
               <img src="/images/banner/Search.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               {activeItem === 2 && <div className="accordion__text">
                  <p>Search</p>
               </div>
               }
            </div>
            <div
               className={`accordion__item ${activeItem === 3 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(3)}
               onMouseLeave={() => setActiveItem(4)}
            >
               <img src="/images/banner/publications.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               <div className="dark_overlay accordion__text">

                  <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}>
                     {/* <h4 className="top30">What is Bardic Poetry?</h4> */}
                     <h2>Fáilte go</h2>
                     <h1> MACMORRIS </h1>
                     {/* <p>
                     An IRC Laureate project that seeks to map the full range and richness of cultural activity,
                     across languages and ethnic groups, in Ireland from 1541 to 1660.
                  </p> */}

                  </div>
               </div>
            </div>
            <div
               className={`accordion__item ${activeItem === 4 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(4)}
               onMouseLeave={() => setActiveItem(4)}
            >
               <img src="/images/banner/network.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

               {activeItem === 4 && <div className="accordion__text">
                  <p>Network</p>
               </div>
               }
            </div>
            <div
               className={`accordion__item ${activeItem === 5 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(5)}
               onMouseLeave={() => setActiveItem(4)}
            >
               <img src="/images/banner/map.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               {activeItem === 5 && <div className="accordion__text">
                  <p>Map</p>
               </div>
               }
            </div>
            <div
               className={`accordion__item ${activeItem === 6 ? 'active' : ''}`}
               onMouseEnter={() => setActiveItem(6)}
               onMouseLeave={() => setActiveItem(4)}
            >
               <img src="/images/banner/resources.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               {activeItem === 6 && <div className="accordion__text">
                  <p>Resources</p>
               </div>
               }
            </div>
            
         </div>
      </>
   );

}

export default Banner;
