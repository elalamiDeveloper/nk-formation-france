import './formations-page.css';
import formations from '../../data/formations.json';
import { FormationItem } from '../../utils/componentsLinks';

const FormationsPage = () => {
  const formationsWeb = formations.filter(
    (foramtion) => foramtion.groupe === 'web'
  );

  const formationsPAO = formations.filter(
    (foramtion) => foramtion.groupe === 'PAO'
  );

  const formationsBureautique = formations.filter(
    (foramtion) => foramtion.groupe === 'bureautique'
  );

  const formationsManagement = formations.filter(
    (foramtion) => foramtion.groupe === 'management'
  );

  return (
    <div className="formations-page container section-padding">
      <h1>Catalogue de formations</h1>
      <div className="gender-item">
        <h2>Bureautique</h2>
        <ul className="list-formations">
          {formationsBureautique.map((formation) => (
            <FormationItem key={formation.id} formation={formation} />
          ))}
        </ul>
      </div>

      <div className="gender-item">
        <h2>Management</h2>
        <ul className="list-formations">
          {' '}
          {formationsManagement.map((formation, i) => (
            <FormationItem key={formation.id} formation={formation} />
          ))}
        </ul>
      </div>

      <div className="gender-item">
        <h2>Publication assistée par ordinateur (PAO)</h2>
        <ul className="list-formations">
          {' '}
          {formationsPAO.map((formation) => (
            <FormationItem key={formation.id} formation={formation} />
          ))}
        </ul>
      </div>

      <div className="gender-item">
        <h2>Web</h2>
        <ul className="list-formations">
          {' '}
          {formationsWeb.map((formation) => (
            <FormationItem key={formation.id} formation={formation} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormationsPage;
