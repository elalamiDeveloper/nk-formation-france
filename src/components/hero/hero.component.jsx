import { Link } from 'react-router-dom';
import './hero.styles.css';
// import Zoom from 'react-reveal/Zoom';
import { Zoom } from 'react-awesome-reveal';

import heroImg from '../../assets/hero-img.jpg';

const Hero = () => {
  return (
    <div className="hero-section section-padding">
      <div className="container">
        <div className="hero-section_text">
          {' '}
          <Zoom left cascade>
            <h1>Nouvelle année, nouvelles évolutions de carrière</h1>
          </Zoom>
          <p>
            Atteignez vos objectifs d'apprentissage et profitez de nos
            formations
            <span className="gratuit"> Gratuitement</span> via votre CPF
          </p>
          <Link to="/contact" className="primary-button">
            Faire Une Demande
          </Link>
        </div>

        <div className="hero-section_img">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
