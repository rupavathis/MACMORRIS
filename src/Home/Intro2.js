import { Link } from 'react-router-dom';


function Intro2({ changeIrish, setAbout, about }) {

    console.log("intro about", about)

    return (
        <section id="about-us" className="padding single-feature bg-sec-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-7 text-md-start text-center wow fadeInLeft" data-wow-delay="300ms">

                        {/* <iframe width="853" height="480"
                            src="https://www.youtube.com/embed/nKnrtMleVBg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe> */}

                    </div>
                    <div className="col-md-6 col-sm-5 wow fadeInRight" data-wow-delay="350ms">

                        {!changeIrish &&
                            <>

                                <div style={{ "textAlign": "justify" }}>
                                    The resources on the site challenge dominant anglophone (and, therefore, colonial) accounts of early modern Ireland. Irish-language texts give access to the vibrancy of Gaelic culture at the height of its powers. The lively and colourful vernacular of the Pale shines a light on the vexed choices facing the Old English community. Texts in Latin, Spanish, and Italian capture the polyphony of Ireland’s engagement with the Continent. Works produced by agents of the Tudor conquest, like Edmund Spenser, bring the often dark energies of the English Renaissance to Ireland.
                                </div>
                                <br />
                                <div style={{ "textAlign": "justify" }}>
                                    MACMORRIS was funded by the Irish Research Council Laureate award.
                                </div>
                            </>
                        }

                        {changeIrish &&
                            <>

                                <div style={{ "textAlign": "justify", paddingBottom: '20px' }}>
                                    De réir an chuntais seo, tá cultúr na nGael faoi bhláth; tá Béarla na Páile beo bríomhar;
                                    tugann leithéidí Edmund Spenser agus gníomhairí na Corónach – go minic faoi scáth dorcha an
                                    choilínithe ­– blaiseadh dúinn de Renaissance Sasanach in Éirinn; agus neart nasc leis an
                                    mhór-roinn.
                                </div>
                                <div style={{ "textAlign": "justify" }}>
                                    Tá sé i gceist ag MACMORRIS an chastacht iomlán a bhaineann le cúrsaí cultúrtha in Éirinn idir na blianta 1541–1660 a léiriú ar bhealach atá idirghníomach, ionchuimsitheach agus ilteangach. Is féidir le scoláirí an tuiscint atá acu ar an tréimhse seo a fheabhsú trína bheith ag taiscéalaíocht trínár mbunachar sonraí inchuardaithe, ár léirshamhlú líonraí agus ár léarscáil dhomhain.
                                </div>
                            </>}

                        {
                            changeIrish && <div className="button btnsecondary pagescroll" style={{ "margin": "30px" }}
                                onClick={() => setAbout(!about)}>Faoin Tionscadal</div>
                        }
                        {
                            !changeIrish && <div className="button btnsecondary pagescroll" style={{ "margin": "30px" }}
                                onClick={() => setAbout(!about)}>About us</div>
                        }

                        {/* <Link to="about-us"> */}

                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro2;
