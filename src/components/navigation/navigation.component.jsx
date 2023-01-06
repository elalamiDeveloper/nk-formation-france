import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './navigation.styles.css';

const NavBar = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo nk-formation" />
      </Link>

      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to="/" className="navbar-link">
              Acceuil
            </Link>
          </li>

          <li>
            <Link to="/formations" className="navbar-link">
              Catalogue de formations
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              nous-contactez
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="navbar-link">
              Qui somme nous ?
            </Link>
          </li>
          <li>
            <Link to="/connect" className="navbar-link connect-link">
              Mon espace
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
