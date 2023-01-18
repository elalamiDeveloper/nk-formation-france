import './connect-page.css';

import { JackInTheBox } from 'react-awesome-reveal';

const ConnectPage = () => {
  return (
    <JackInTheBox className="connect-page">
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
  );
};

export default ConnectPage;
