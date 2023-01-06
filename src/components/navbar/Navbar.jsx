import { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

import './navbar.css';

const Navbar = ({ className }) => {
  const [navBarHidden, setnavBarHidden] = useState(false);
  const navclasses = `navbar ${className}`;

  const hideNavBar = () => {
    setnavBarHidden((lastVal) => !lastVal);
  };

  return (
    <nav className={navclasses}>
      <ul className={`navbar-list ${navBarHidden ? 'hidden' : ''}`}>
        <li>
          <Link to="/" className="navbar-link">
            Accueil
          </Link>
        </li>

        <li>
          <Link to="/formations" className="navbar-link">
            Catalogue de formations
          </Link>
        </li>

        <li>
          <Link to="/contact" className="navbar-link">
            Nous contacter
          </Link>
        </li>

        <li>
          <Link to="/about-us" className="navbar-link">
            Qui sommes nous ?
          </Link>
        </li>

        <li>
          <Link to="/connect" className="navbar-link connect-link">
            Mon espace
          </Link>
        </li>
      </ul>

      <MenuIcon className="menu-icon" onClick={hideNavBar} />
    </nav>
  );
};

export default Navbar;
