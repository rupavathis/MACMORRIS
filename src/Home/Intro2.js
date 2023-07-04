import { Link } from 'react-router-dom';


function Intro2({ changeIrish, setAbout, about }) {

    console.log("intro about", about)

    return (
        <section id="about-us" className="padding single-feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-7 text-md-start text-center wow fadeInLeft" data-wow-delay="300ms">
                        {changeIrish && <div className="heading-title heading_space">
                            <span>Eolas fúinne:</span>
                            <h2 className="darkcolor bottom30">Cad atá i gceist le MACMORRIS?</h2>
                        </div>}
                        {!changeIrish && <div className="heading-title heading_space">
                            <span>Learn about us:</span>
                            <h2 className="darkcolor bottom30">What is MACMORRIS?</h2>
                        </div>}

                        {!changeIrish &&
                            <>

                                <div style={{ "textAlign": "justify" }}>
                                    In this account, Gaelic culture is vibrant; the English vernacular
                                    of the Pale is lively and colourful; agents of the Tudor conquest like
                                    Edmund Spenser bring the energies – often dark energies – of the English Renaissance to
                                    Ireland; and contact with mainland Europe is routine.
                                </div>
                            </>
                        }

                        {changeIrish &&
                            <>

                                <div style={{ "textAlign": "justify" }}>
                                    De réir an chuntais seo, tá cultúr na nGael faoi bhláth; tá Béarla na Páile beo bríomhar;
                                    tugann leithéidí Edmund Spenser agus gníomhairí na Corónach – go minic faoi scáth dorcha an
                                    choilínithe ­– blaiseadh dúinn de Renaissance Sasanach in Éirinn; agus neart nasc leis an
                                    mhór-roinn.
                                </div>
                            </>}

                        {
                            changeIrish && <div className="button btnsecondary pagescroll" style={{ "margin": "10px" }}
                                onClick={() => setAbout(!about)}>Faoin Tionscadal</div>
                        }
                        {
                            !changeIrish && <div className="button btnsecondary pagescroll" style={{ "margin": "10px" }}
                                onClick={() => setAbout(!about)}>About us</div>
                        }

                        {/* <Link to="about-us"> */}

                        {/* </Link> */}
                    </div>
                    <div className="col-md-6 col-sm-5 wow fadeInRight" data-wow-delay="350ms">

                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/dZn47_whvEg"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe> */}

                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/dZn47_whvEg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro2;
