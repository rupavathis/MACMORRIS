import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function Header({ changeIrish, setChangeIrish }) {

   return (
      <header className="site-header">
         <nav className="navbar navbar-expand-lg bg-transparent-light static-nav">
            <div className="container">
               <Link to='/' className="navbar-brand" href="index.html">
                  <div className="logo-item"><img style={{ 'object-fit': 'contain', 'width': '200px', 'scale': '2px' }} alt="" src="images/logos/macmorris.png" /></div>
               </Link>
               <button className="navbar-toggler navbar-toggler-right collapsed d-none" type="button" data-bs-toggle="collapse"
                  data-bs-target="#xenav">
                  <span> </span>
                  <span> </span>
                  <span> </span>
               </button>
               <div className="collapse navbar-collapse" id="xenav">
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item active">
                        <Link to='/' className="nav-link pagescroll">Home</Link>
                     </li>
                     <li className="nav-item active">
                        <HashLink className="nav-link pagescroll" href="/#about-us">What is MACMORRIS?</HashLink>
                     </li>
                     <li className="nav-item">
                        <HashLink className="nav-link pagescroll" href="/#our-viz">Database</HashLink>
                     </li>
                     <li className="nav-item">
                        <HashLink className="nav-link pagescroll" href="/#our-casestudies">Case Studies</HashLink>
                     </li>
                     <li className="nav-item">
                        <HashLink className="nav-link pagescroll" href="/#our-team">Team</HashLink>
                     </li>
                     <li className="nav-item">
                        <HashLink className="nav-link pagescroll" to="/#our-sponsors">Sponsors</HashLink>
                     </li>
                     <li className="nav-item">
                        <HashLink className="nav-link pagescroll" href="/#our-tweet">Tweet</HashLink>
                     </li>
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
