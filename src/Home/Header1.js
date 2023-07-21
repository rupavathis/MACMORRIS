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

                <div className="header__menu --right js-header-menu --desktop">
                    <div className="header__menu__item header__search js-search pagescroll wow fadeInUp">
                        <a className="nav-link pagescroll " href="#" onClick={() => {
                            setChangeIrish(!changeIrish)
                        }}>
                            {changeIrish && <span>View in English</span>}
                            {!changeIrish && <span>View in Irish</span>}
                        </a>
                    </div>

                </div>


            </header>


        </div>
    );
}

export default Header1;
