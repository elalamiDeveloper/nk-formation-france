import './hero.styles.css';
import { Zoom, Slide } from 'react-awesome-reveal';

import heroImg from '../../assets/hero-img.jpg';

const Hero = () => {
  return (
    <div className="hero-section section-padding">
      <div className="container">
        <div className="hero-section_text">
          <h1>
            <Zoom>Nouvelle année, nouvelles évolutions de carrière</Zoom>
          </h1>
          <Slide>
            <p>
              Atteignez vos objectifs d'apprentissage et profitez de nos
              formations
              <span className="gratuit" style={{ display: 'block' }}>
                Gratuitement via votre CPF
              </span>
            </p>
          </Slide>
          <Slide>
            <a href="/contact" className="primary-button">
              Faire Une Demande
            </a>
          </Slide>
        </div>

        <Zoom className="hero-section_img">
          <img src={heroImg} alt="hero" />
        </Zoom>
      </div>
    </div>
  );
};

export default Hero;
