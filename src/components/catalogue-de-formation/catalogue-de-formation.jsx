import './catalogue-de-formation.style.css';

const CatalogueDeFormation = () => {
  return (
    <div className="container section-padding section-catalogue-de-formation">
      <div className="text">
        <h2>Acquérir des compétences professionnelles recherchées</h2>
        <p>faites votre choix parmi nos cours en ligne...</p>
      </div>
      <ul className="list-formation">
        <li className="item-formation">
          <h3>Formation Wordpress</h3>
          <h4>pré-requis</h4>
          <p>Connaissance de la création de site Web, de PHP, HTML/CSS</p>
          <h4>Résultat attendus</h4>
          <p>Obtenir la certification “Formation Wordpress”</p>
          <h4>Certification</h4>
          <p>TP - Développeur Web</p>
          <button className="details">Détails de la Formation</button>
        </li>

        <li className="item-formation">
          <h3>Formation Wordpress</h3>
          <h4>pré-requis</h4>
          <p>Connaissance de la création de site Web, de PHP, HTML/CSS</p>
          <h4>Résultat attendus</h4>
          <p>Obtenir la certification “Formation Wordpress”</p>
          <h4>Certification</h4>
          <p>TP - Développeur Web</p>
          <button className="details">Détails de la Formation</button>
        </li>
      </ul>
    </div>
  );
};

export default CatalogueDeFormation;
