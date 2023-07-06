import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './home.scss';

function Header1({ changeIrish, setChangeIrish, setAbout }) {

    return (
        <div className="sticky-header site-header">
            <header className="header js-header">
                <div className="header__logo">
                    <Link to='/' href="index.html">
                        <img style={{
                            width: 300,
                            height: 'auto'
                        }} alt=""
                            src="/images/logos/macmorris.png" />
                    </Link>
                </div>

                <div class="header__menu --right js-header-menu --desktop">
                    <div class="header__menu__item header__search js-search pagescroll wow fadeInUp">
                        <a className="nav-link pagescroll " href="#" onClick={() => {
                            setChangeIrish(!changeIrish)
                        }}>
                            {changeIrish && <span>View in English</span>}
                            {!changeIrish && <span>View in Irish</span>}
                        </a>
                    </div>

                </div>


            </header>
            {/* <div className="navbar">
                <div className="navbar__container">
                    <nav className="primary-nav js-nav">
                        <ul className="primary-nav__menu">
                            <li className='menu__item'>Network</li>
                            <li className='menu__item'>Search</li>
                            <li className='menu__item'>Case studies</li>
                            <li className='menu__item'>Map</li>

                        </ul>
                    </nav>
                </div>
            </div> */}

        </div>
    );
}

export default Header1;
