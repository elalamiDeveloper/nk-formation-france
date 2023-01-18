import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';

import './navbar.css';

const Navbar = ({ navBarHidden, onHideNavigation }) => {
  return (
    <nav className={`navbar-container `}>
      <ul className={`navbar-list ${navBarHidden ? 'hidden' : ''}`}>
        <li className="navbar-item" onClick={onHideNavigation}>
          <Link to="/" className="navbar-link">
            <Flip left cascade>
              Accueil
            </Flip>
          </Link>
        </li>

        <li className="navbar-item" onClick={onHideNavigation}>
          <Link to="/formations" className="navbar-link">
            <Flip left cascade>
              Catalogue de formations
            </Flip>
          </Link>
        </li>

        <li className="navbar-item" onClick={onHideNavigation}>
          <Link to="/contact" className="navbar-link">
            <Flip left cascade>
              Nous contacter
            </Flip>
          </Link>
        </li>

        <li className="navbar-item" onClick={onHideNavigation}>
          <Link to="/about-us" className="navbar-link">
            <Flip left cascade>
              Qui sommes nous ?
            </Flip>
          </Link>
        </li>

        <li className="navbar-item" onClick={onHideNavigation}>
          <Link to="/connect" className="navbar-link connect-link">
            <Flip left cascade>
              Mon espace
            </Flip>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
