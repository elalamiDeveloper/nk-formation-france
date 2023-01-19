import { Link } from 'react-router-dom';
import './formation-item.css';

// import Reveal from 'react-reveal/Reveal';
import { JackInTheBox } from 'react-awesome-reveal';

const FormationItem = ({ formation }) => {
  const { title, preRequis, objectifs } = formation;

  return (
    <JackInTheBox className="formation-item">
      <div>
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
          <a href="/contact" className="btn-details">
            Détails de la formation
          </a>
        </div>
      </div>
    </JackInTheBox>
  );
};

export default FormationItem;
