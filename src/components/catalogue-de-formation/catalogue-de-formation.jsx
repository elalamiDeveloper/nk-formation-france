import './catalogue-de-formation.style.css';
import formations from '../../data/formations.json';
import { FormationItem } from '../../utils/componentsLinks';

const randomFormations = (formations, nbrFormations) => {
  const newFormations = [];
  while (newFormations.length < nbrFormations) {
    const a = Math.floor(Math.random() * formations.length);
    if (!newFormations.some((formation) => formation.id === formations[a].id))
      newFormations.push(formations[a]);
  }
  return newFormations;
};

const CatalogueDeFormation = () => {
  const formationsDuo = randomFormations(formations, 2);
  return (
    <div className="container section-padding section-catalogue-de-formation">
      <div className="text">
        <h2>Acquérir des compétences professionnelles recherchées</h2>
        <p>faites votre choix parmi nos cours en ligne...</p>
      </div>

      <div className="list-formation">
        {formationsDuo.map((formation) => (
          <FormationItem key={formation.id} formation={formation} />
        ))}
      </div>
    </div>
  );
};

export default CatalogueDeFormation;
