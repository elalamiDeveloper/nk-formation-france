import { Link } from 'react-router-dom';

import './connect.css';

import logo from '../../../assets/logo.png';

const Connect = () => {
  return (
    <div className="connect-section">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo nk-formation" />
        </div>

        <div className="text">
          <h3 className="title">NK Formation</h3>
          <p className="date">9h à 19h du Lundi au Vendredi</p>
          <p className="desciption">Vous avez des questions ? </p>

          <p className="desciption">
            Contactez-moi directement pour plus d’informations !
          </p>
        </div>
        <Link to="/" className="connect-section-link whatsapp-link">
          WhatsApp
        </Link>
        <Link to="/" className="connect-section-link facebook-link">
          Facebook
        </Link>

        <Link to="/" className="connect-section-link linkedin-link">
          Linkedin
        </Link>

        <Link to="/" className="connect-section-link instagram-link">
          Instagram
        </Link>
      </div>
    </div>
  );
};

export default Connect;
