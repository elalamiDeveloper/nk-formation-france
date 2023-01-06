import { Link } from 'react-router-dom';

import './logo.css';

import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <Link className="logo-container" to="/">
      <img src={logo} alt="logo nk-formation" />
    </Link>
  );
};

export default Logo;
