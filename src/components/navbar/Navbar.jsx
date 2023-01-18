import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = ({ navBarHidden, onHideNavigation }) => {
  return (
    <nav className={`navbar-container `}>
      <ul className={`navbar-list ${navBarHidden ? 'hidden' : ''}`}>
        <li className="navbar-item" onClick={onHideNavigation}>
          <Link to="/" className="navbar-link">
            Accueil
          </Link>
        </li>

        <li className="navbar-item" onClick={onHideNavigation}>
          <Link to="/formations" className="navbar-link">
            Catalogue de formations
          </Link>
        </li>

        <li className="navbar-item" onClick={onHideNavigation}>
          <Link to="/contact" className="navbar-link">
            Nous contacter
          </Link>
        </li>

        <li className="navbar-item" onClick={onHideNavigation}>
          <Link to="/about-us" className="navbar-link">
            Qui sommes nous ?
          </Link>
        </li>

        <li className="navbar-item" onClick={onHideNavigation}>
          <Link to="/connect" className="navbar-link connect-link">
            Mon espace
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
