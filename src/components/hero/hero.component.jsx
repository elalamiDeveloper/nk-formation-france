import './hero.styles.css';

import heroImg from '../../assets/hero-img.jpg';

const Hero = () => {
  return (
    <div className="hero-section section-padding">
      <div className="container">
        <div className="hero-section_text">
          <h1>Nouvelle année, nouvelles évolutions de carrière</h1>
          <p>
            Atteignez vos objectifs d'apprentissage et profitez de nos formation
            <span className="gratuit"> Gratuitement</span> via votre CPF
          </p>

          <button className="primary-button">Faire Une Demande</button>
        </div>

        <div className="hero-section_img">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
