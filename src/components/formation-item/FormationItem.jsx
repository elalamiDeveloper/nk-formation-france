import { Link } from 'react-router-dom';
import './formation-item.css';

import Reveal from 'react-reveal/Reveal';

const FormationItem = ({ formation }) => {
  const { title, preRequis, objectifs } = formation;

  return (
    <Reveal effect="fadeInUp">
      <div className="formation-item">
        <h3>{title}</h3>
        <div className="formation-item-ii">
          <h4>Pré-requis</h4>
          {preRequis.map((pre) => (
            <p>{pre}</p>
          ))}
        </div>
        <div className="formation-item-ii">
          <h4>Résultats attendus</h4>
          {objectifs.map((objectif) => (
            <p>{objectif}</p>
          ))}
          <Link to="/contact" className="btn-details">
            Détails de la formation
          </Link>
        </div>
      </div>
    </Reveal>
  );
};

export default FormationItem;
