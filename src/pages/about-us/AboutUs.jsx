import './about-us.css';
import aboutImage from '../../assets/about-us.jpg';
import { Zoom, Slide, Rotate } from 'react-awesome-reveal';

const AboutUsPage = () => {
  return (
    <div className="about-us container section-padding">
      <div className="text">
        <Zoom>
          <h1>Qui sommes nous.</h1>
        </Zoom>
        <Slide>
          <p>
            <strong>NK FORMATION</strong> est un organisme certifié qualité par
            le Référentiel National Qualité Qualiopi (loi du 5 septembre 2018,
            Décret n° 2019-565 du 6 juin 2019) pour la catégorie : Actions de
            formation. Toutes nos formations préparent à des certifications
            professionnelles ou blocs de compétences enregistrés dans les
            répertoires de la certification et reconnues par l'État.
          </p>
          <p>
            Chez <strong>NK FORMATION</strong>, nous pensons que la formation ne
            doit pas être une contrainte et doit parfaitement s’adapter à votre
            situation professionnelle et personnelle. Ainsi, notre équipe
            travaille chaque jour afin de vous proposer la meilleure expérience
            en termes de e-learning et coaching individualisé. Nos formations
            certifiantes et éligibles CPF sont sélectionnées parmi les plus
            demandées du digital et vous permettent de faire évoluer votre
            carrière. Nos experts vous accompagnent du début de votre formation
            jusqu’au passage de la certification pour vous permettre de vous
            former sereinement.
          </p>
        </Slide>
      </div>

      <Rotate direction="left">
        <div className="img">
          <img src={aboutImage} alt="" />
        </div>
      </Rotate>
    </div>
  );
};

export default AboutUsPage;
