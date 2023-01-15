import './connect-page.css';

const ConnectPage = () => {
  return (
    <div className="connect-page">
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
    </div>
  );
};

export default ConnectPage;
