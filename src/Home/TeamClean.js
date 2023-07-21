import Biography from "./Biographies/Biography";
import React, { useState } from 'react';
import data from './bio.json';


function TeamClean({ changeIrish }) {

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
                            <span>Meet the Team</span>
                            <h2 className="darkcolor bottom20">MACMORRIS Team</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        Object.values(data).map((e, i) =>
                            <div className="col-lg-3 col-md-6" key={e.id} onClick={() => handleClose(i)}>
                                <div className="team-box top60 wow fadeIn" data-wow-delay="350ms">
                                    <div>
                                        <img src={`${e.imgURL}`} alt=""
                                            style={{ width: "300px", height: "300px", objectFit: "cover", objectPosition: "center" }} />
                                    </div>
                                    <div className="team-content" >
                                        <h3>{e.name}</h3>
                                        <p className="nomargin">{e.designation}</p>
                                        {showID === i && <Biography show={show} handleClose={handleClose} data={e} changeIrish={changeIrish} />}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default TeamClean;
