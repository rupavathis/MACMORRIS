import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './home.scss';

function Footer() {

    return (
        <section id="our-sponsors" >
            <div className='header'></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div id="partners-slider" className="owl-carousel">
                            <div className="item">
                                <div className="logo-item">
                                    <a href="https://www.dib.ie/">
                                        <img alt="" src="/images/logos/dib.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo-item">
                                    <a href="https://research.ie/">
                                        <img alt="" src="/images/logos/irc.jpg" />
                                    </a></div>
                            </div>
                            <div className="item">
                                <div className="logo-item">
                                    <a href="https://xn--lamh-bpa.org/">
                                        <img alt="" src="/images/logos/leamh.png" />
                                    </a></div>
                            </div>
                            <div className="item">
                                <div className="logo-item"><img alt="" src="/images/logos/macmorris.png" /></div>
                            </div>
                            <div className="item">
                                <div className="logo-item">
                                    <a href="https://maynoothuniversity.ie/">
                                        <img alt="" src="/images/logos/maynooth.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Footer;
