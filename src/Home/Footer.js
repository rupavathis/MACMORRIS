import './home.scss';

function Footer() {
    return (
        <footer id="site-footer" className="padding_half">
            <div className='header'></div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">

                        <ul className="social-icons small bottom25 wow fadeInUp" data-wow-delay="300ms">
                            <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i> </a> </li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
