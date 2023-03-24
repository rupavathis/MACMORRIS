function Team() {
   return (
      <section id="our-team" className="padding">
         <div className="container">
            <div className="row">
               <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                  <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
                     <span>Meet the team / Foireann MACMORRIS </span>
                     <h2 className="darkcolor bottom20">MACMORRIS Team</h2>

                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-3 col-md-6">
                  <div className="team-box top60 wow fadeIn" data-wow-delay="350ms">
                     <div className="image">
                        <img src="images/photos/Pat.jpg" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }}></img>
                     </div>
                     <div className="team-content">
                        <h3>Pat Palmer</h3>
                        <p className="nomargin">Principal Investigator/ Príomhthaighdeoir</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="team-box top60 wow fadeIn" data-wow-delay="400ms">
                     <div className="image">
                        <img src="images/photos/Evan.JPG" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }}></img>
                     </div>
                     <div className="team-content">
                        <h3>Evan Bourke</h3>
                        <p className="nomargin">Project Manager/ Bainisteoir an tionscadail </p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="team-box  top60 wow fadeIn" data-wow-delay="450ms">
                     <div className="image">
                        <img src="images/photos/Deirdre.jpg" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }}></img>
                     </div>
                     <div className="team-content">
                        <h4>Deirdre Nic Chárthaigh</h4>
                        <p className="nomargin">Postdoctoral Researcher/ Taighdeoir iardhochtúireachta</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="team-box  top60 wow fadeIn" data-wow-delay="500ms">
                     <div className="image">
                        <img src="images/photos/Phil.jpg" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }}></img>
                     </div>
                     <div className="team-content">
                        <h3>Philip Mac a’ Ghoill</h3>
                        <p className="nomargin">Postdoctoral Researcher/ Taighdeoir iardhochtúireachta</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="team-box  top60 wow fadeIn" data-wow-delay="500ms">
                     <div className="image">
                        <img src="images/photos/team-4.jpg" alt="" />
                     </div>
                     <div className="team-content">
                        <h3>Rupavathi S</h3>
                        <p className="nomargin">Lead Programmer/ Ríomhchláraitheoir</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="team-box top60 wow fadeIn" data-wow-delay="500ms">
                     <div className="image">
                        <img src="images/photos/Alan.jpg" alt=""
                           style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }}></img>
                     </div>
                     <div className="team-content darkcolor">
                        <h3>Alan Waldron</h3>
                        <p className="nomargin">PhD Researcher/ Taighdeoir PhD</p>
                     </div>
                  </div>
               </div>
               {/* <div className="col-lg-3 col-md-6">
               <div className="team-box  top60 wow fadeIn" data-wow-delay="500ms">
                  <div className="image">
                     <img src="images/team-4.jpg" alt="" />
                  </div>
                  <div className="team-content darkcolor">
                     <h3>Alan Waldron</h3>
                     <p className="nomargin">PhD Researcher/ Taighdeoir PhD</p>
                  </div>
               </div>
            </div> */}
            </div>
         </div>
      </section>
   );
}

export default Team;
