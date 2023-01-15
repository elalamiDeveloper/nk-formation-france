import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="footer-item">
          <h3 className="title">Contact</h3>
          <div className="information">
            <CallIcon className="information-icon" />
            0782714754
          </div>

          <div className="information">
            <EmailIcon className="information-icon" />
            contact@nkformationfrance.fr
          </div>
        </div>

        <div className="footer-item">
          <h3 className="title">Nos Réseaux sociaux</h3>
          <div className="social-media-icons">
            <Link to="/">
              <FacebookIcon className="social-media-icon" />
            </Link>
            <Link to="/">
              <LinkedInIcon className="social-media-icon" />
            </Link>
            <Link to="/">
              <InstagramIcon className="social-media-icon" />
            </Link>
          </div>
        </div>
      </div>

      <p className="footer-copyright">
        Copyright © 2023 NK Formation. Politique de confidentialité Mentions
        légales.
      </p>
    </div>
  );
};

export default Footer;
