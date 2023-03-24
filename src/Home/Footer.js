function Footer() {
    return (
        <footer id="site-footer" className="padding_half">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        {/* <!-- <img src="images/logo-dark.png" alt="logo" className="footer-logo bottom45"> --> */}
                        <ul className="social-icons small bottom25 wow fadeInUp" data-wow-delay="300ms">
                            <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i> </a> </li>
                        </ul>
                        {/* <!-- <p className="copyrights wow fadeInUp" data-wow-delay="350ms"> &copy; 2019 MACMORRIS. made with love by
                          <a href="http://www.themesindustry.com/" target="_blank">themesindustry</a>
                       </p> --> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
