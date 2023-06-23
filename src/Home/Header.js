import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function Header({ changeIrish, setChangeIrish, setAbout }) {

   return (
      <header className="site-header">
         <nav className="navbar navbar-expand-lg bg-transparent-light static-nav">
            <div className="container">
               <Link to='/' className="navbar-brand" href="index.html">
                  <div className="logo-item"><img style={{ 'height':'80px', 'width': '250px' }} alt="" src="images/logos/macmorris.png" /></div>
               </Link>
               <button className="navbar-toggler navbar-toggler-right collapsed d-none" type="button" data-bs-toggle="collapse"
                  data-bs-target="#xenav">
                  <span> </span>
                  <span> </span>
                  <span> </span>
               </button>
               <div className="collapse navbar-collapse" id="xenav" onClick={() => setAbout(false)}>
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item active">
                        <Link to='/' className="nav-link pagescroll">Home</Link>
                     </li>
                     <li className="nav-item active">
                        <HashLink className="nav-link pagescroll" to="/#about-us">What is MACMORRIS?</HashLink>
                     </li>
                     <li className="nav-item">
                        <HashLink className="nav-link pagescroll" to="/#our-viz">Explore</HashLink>
                     </li>
                     <li className="nav-item">
                        <HashLink className="nav-link pagescroll" to="/#our-casestudies">Resources</HashLink>
                     </li>
                     <li className="nav-item">
                        <HashLink className="nav-link pagescroll" to="/#our-team">Team</HashLink>
                     </li>
                     <li className="nav-item">
                        <HashLink className="nav-link pagescroll" to="/#our-sponsors">Sponsors</HashLink>
                     </li>
                     {/* <li className="nav-item">
                        <HashLink className="nav-link pagescroll" to="/#our-tweet">Tweet</HashLink>
                     </li> */}
                     {/* <li className="nav-item">
                        <HashLink className="nav-link pagescroll" href="/#contactus">contact</HashLink>
                     </li> */}
                     <li className="nav-item">
                        <a className="nav-link pagescroll" href="#" onClick={() => {
                           setChangeIrish(!changeIrish)
                        }}>
                           {changeIrish && <span>View in English</span>}
                           {!changeIrish && <span>View in Irish</span>}
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

         </nav>


      </header>
   );
}

export default Header;
