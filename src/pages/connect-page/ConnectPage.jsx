import './connect-page.css';
import Jump from 'react-reveal/Jump';

const ConnectPage = () => {
  return (
    <div className="connect-page">
      <Jump>
        <form className="connect-form">
          <div className="item">
            <label htmlFor="identifiant">Identifiant</label>
            <input type="text" />
          </div>

          <div className="item">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" />
          </div>

          <button className="btn-submit">Connexion</button>
        </form>
      </Jump>
    </div>
  );
};

export default ConnectPage;
