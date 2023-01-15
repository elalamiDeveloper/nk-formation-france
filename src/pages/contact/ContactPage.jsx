import './contact-page.css';
import { ContactForm } from '../../utils/componentsLinks';

const ContactPage = () => {
  return (
    <div className="contact-page section-padding container">
      <div className="contact-page-text">
        <h1>Nous contacter.</h1>
        <p>
          Remplissez le formulaire et nos responsables pédagogiques vous
          répondront sous 30 min maximum !
        </p>
        <p>
          Ils vous guideront et vous aideront a trouver LA formation dont vous
          avez besoin.
        </p>
        <p>Si vous voulez joindre directement nos conseillers formations :</p>
        <p>
          Du lundi au vendredi, dont les jours fériés, de
          <strong> 9h à 19h</strong>
          <br /> <strong> 07 82 71 47 54 </strong>
        </p>
        <p>
          Par email : <strong>contact@nkformationfrance.fr</strong>
        </p>
        <p>
          Partenariat <br />
          Autres questions ?
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
