import MapHome from './Map'
import Search from './Search'
import Network from './Network'
import { Link } from 'react-router-dom'
import SearchWrapper from './SearchWrapper';
import './home.scss'

function Viz({ changeIrish, setRemoveHeader }) {
    return (
        <div className="container" id="our-viz">
            <div className="row">
                <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                    <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
                        {changeIrish && <span style={{ padding: '40px', fontSize: '2rem' }}>Déan iniúchadh ar thírdhreach cultúrtha na hÉireann sa Nua-Aois Luath</span>}
                        {!changeIrish && <span style={{ padding: '40px', fontSize: '2rem' }}>Explore the cultural landscape of Early Modern Ireland</span>}
                        {/* {changeIrish && <h2 className="darkcolor bottom20">Bunachar Sonraí</h2>} */}
                        {/* {!changeIrish && <h2 className="darkcolor bottom20">Database</h2>} */}


                    </div>
                </div>
                <section className="half-section" id="our-viz-search" style={{ maxHeight: '500px' }} >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 nopadding">
                                <Link to='search'>
                                    <SearchWrapper />
                                </Link>
                            </div>
                            <div className="col-lg-6 nopadding">
                                <div className="split-box text-center center-block container-padding equalheight">
                                    {changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Léirshamhlú Idirghníomhach 1</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Cuardaigh</h2>
                                        <div className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Comhéadan cuardaigh a chabhraíonn leat na daoine agus na téacsanna
                                            sa bhunachar sonraí a aimsiú</div>
                                        <Link to='search'>
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">cuardach a iniúchadh!</div>
                                        </Link>
                                    </div>}
                                    {!changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Visualisation Interface 1</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Search the Database</h2>
                                        <div className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Search people and texts in our
                                            database </div>
                                        <Link to='search'>
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">Explore Search!</div>
                                        </Link>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='header'></div>

                <section className="half-section" id="our-viz-map">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 nopadding">
                                <div className="split-box text-center center-block container-padding equalheight">
                                    {changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Léirshamhlú Idirghníomhach 2</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Léarscáil</h2>
                                        <div className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Féach ar an Léarscáil Dhomhain de Chúige Mumhan</div>
                                        <Link to='map' target="_blank" rel="noopener noreferrer">
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">léarscáil a iniúchadh!</div>
                                        </Link>
                                    </div>}
                                    {!changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Visualisation interface 2</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Deep Map</h2>
                                        <div className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Engage with the cultural complexity of Munster 1569 - 1607 </div>
                                        <Link to='map' target="_blank" rel="noopener noreferrer">
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                onClick={() => setRemoveHeader(false)}
                                                data-wow-delay="450ms">Explore Map!</div>
                                        </Link>
                                    </div>}
                                </div>
                            </div>
                            <div className="col-lg-6 nopadding">
                                <div className="img-container" style={{ height: 500 }}>
                                    <Link to='map' target="_blank" rel="noopener noreferrer" style={{ height: 500, display: 'inline-block', width: 630 }}>
                                        <MapHome className="equalheight" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='header'></div>

                <section className="half-section" id="our-viz-network">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 nopadding">
                                <div className="img-container">
                                    <Link to='network' target="_blank" rel="noopener noreferrer">
                                        <Network className="equalheight" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 nopadding">
                                <div className="split-box text-center center-block container-padding equalheight">
                                    {changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Léirshamhlú Idirghníomhach 3</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Líonraí</h2>
                                        <div className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Bain triail as an chomhéadan líonraí seo chun na naisc idir na daoine agus
                                            na téacsanna sa bhunachar sonraí a fheiceáil</div>

                                        <Link to='network' target="_blank" rel="noopener noreferrer">
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">líonraí a iniúchadh!</div>
                                        </Link>
                                    </div>}
                                    {!changeIrish && <div className="heading-title padding">
                                        <span className=" wow fadeIn" data-wow-delay="300ms">Visualisation Interface 3</span>
                                        <h2 className="darkcolor bottom20 wow fadeIn" data-wow-delay="350ms">Network</h2>
                                        <div className="heading_space wow fadeIn" data-wow-delay="400ms">
                                            Discover our network interface
                                            to
                                            see how people and texts connect in our database</div>

                                        <Link to='network' target="_blank" rel="noopener noreferrer">
                                            <div className="button btnsecondary pagescroll wow fadeInUp"
                                                data-wow-delay="450ms">Explore Network!</div>
                                        </Link>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
}

export default Viz;
