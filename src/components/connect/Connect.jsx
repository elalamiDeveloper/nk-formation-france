import './connect.css';

import logo from '../../assets/logo.png';

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
            Contactez-nous directement pour plus d’informations !
          </p>
        </div>

        <div className="connect-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/0782714754"
            className="connect-section-link whatsapp-link"
          >
            WhatsApp
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100088551595262"
            className="connect-section-link facebook-link"
          >
            Facebook
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/nk-formation/"
            className="connect-section-link linkedin-link"
          >
            Linkedin
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/nkformation/"
            className="connect-section-link instagram-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
