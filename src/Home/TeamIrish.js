import Biography from "./Biographies/Biography";
import React, { useState } from 'react';
import BioText from './BioTextIrish.json';

function Team() {

   const [showID, setShowID] = useState("");
   const [show, setShow] = useState(false);

   const handleClose = (e) => {
      setShowID(e)
      console.log("handle close", e)
      setShow(!show);
   }


   return (
      <section id="our-team" className="padding">
         <div className="container">
            <div className="row">
               <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                  <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
                     <span>Seo í an fhoireann</span>
                     <h2 className="darkcolor bottom20">Foireann MACMORRIS</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-3 col-md-6" onClick={() => handleClose(0)}>
                  <div className="team-box top60 wow fadeIn" data-wow-delay="350ms">
                     <div className="image">
                        <img src="images/photos/Pat.jpg" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }} />
                     </div>
                     <div className="team-content" >
                        <h3>Pat Palmer</h3>
                        <p className="nomargin">Principal Investigator/ Príomhthaighdeoir</p>
                        {showID === 0 && <Biography show={show} handleClose={handleClose} text={BioText[0]} />}
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" onClick={() => handleClose(1)}>
                  <div className="team-box top60 wow fadeIn" data-wow-delay="400ms">
                     <div className="image">
                        <img src="images/photos/Evan.JPG" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }} />
                     </div>
                     <div className="team-content">
                        <h3>Evan Bourke</h3>
                        <p className="nomargin">Project Manager/ Bainisteoir an tionscadail </p>
                        {showID === 1 && <Biography show={show} handleClose={handleClose} text={BioText[1]} />}
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" onClick={() => handleClose(2)}>
                  <div className="team-box  top60 wow fadeIn" data-wow-delay="450ms">
                     <div className="image">
                        <img src="images/photos/Deirdre.jpg" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center top" }} />
                     </div>
                     <div className="team-content">
                        <h3 style={{ fontSize: '1.62rem' }}>Deirdre Nic Chárthaigh</h3>
                        <p className="nomargin">Postdoctoral Researcher/ Taighdeoir iardhochtúireachta</p>
                        {showID === 2 && <Biography show={show} handleClose={handleClose} text={BioText[2]} />}
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" onClick={() => handleClose(3)}>
                  <div className="team-box  top60 wow fadeIn" data-wow-delay="500ms">
                     <div className="image">
                        <img src="images/photos/Phil.jpg" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }} />
                     </div>
                     <div className="team-content">
                        <h3>Philip Mac a’ Ghoill</h3>
                        <p className="nomargin">Postdoctoral Researcher/ Taighdeoir iardhochtúireachta</p>
                        {showID === 3 && <Biography show={show} handleClose={handleClose} text={BioText[3]} />}
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" onClick={() => handleClose(4)}>
                  <div className="team-box  top60 wow fadeIn" data-wow-delay="500ms">
                     <div className="image">
                        <img src="images/photos/Ruby.jpg" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }} />
                     </div>
                     <div className="team-content">
                        <h3>Rupavathi S</h3>
                        <p className="nomargin">Lead Programmer/ Ríomhchláraitheoir</p>
                        {showID === 4 && <Biography show={show} handleClose={handleClose} text={BioText[4]} />}
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6" onClick={() => handleClose(5)}>
                  <div className="team-box top60 wow fadeIn" data-wow-delay="500ms">
                     <div className="image">
                        <img src="images/photos/Alan.jpg" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }} />
                     </div>
                     <div className="team-content darkcolor">
                        <h3>Alan Waldron</h3>
                        <p className="nomargin">PhD Researcher/ Taighdeoir PhD</p>
                        {showID === 5 && <Biography show={show} handleClose={handleClose} text={BioText[5]} />}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Team;
