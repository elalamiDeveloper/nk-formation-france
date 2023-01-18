import './connect-page.css';

import { JackInTheBox } from 'react-awesome-reveal';

const ConnectPage = () => {
  return (
    <div className="connect-page">
      <JackInTheBox>
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
      </JackInTheBox>
    </div>
  );
};

export default ConnectPage;
