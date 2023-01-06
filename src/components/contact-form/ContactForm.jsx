import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { addUser } from '../../utils/firebase/firebase';

import './contact-form.css';

const ContactForm = () => {
  const [inputFields, setInputFields] = useState({
    prenom: '',
    nom: '',
    email: '',
    tel: '',
    formationSouhaite: '',
    soldeCPF: '',
    dateRappel: '',
    heureRappel: '',
    message: '',
  });

  const {
    prenom,
    nom,
    email,
    tel,
    formationSouhaite,
    soldeCPF,
    dateRappel,
    heureRappel,
    message,
  } = inputFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInputFields((lastInputFields) => ({
      ...lastInputFields,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newId = uuidv4();
    const newContact = { ...inputFields, id: newId };
    addUser(newContact);

    setInputFields({
      prenom: '',
      nom: '',
      email: '',
      tel: '',
      formationSouhaite: '',
      soldeCPF: '',
      dateRappel: '',
      heureRappel: '',
      message: '',
    });
  };

  return (
    <form action="" className="contact-page-form" onSubmit={onSubmitHandler}>
      <h3>Écrivez-nous.</h3>
      <div className="input-team">
        <label htmlFor="prenom">Prenom</label>
        <input
          type="text"
          name="prenom"
          value={prenom}
          id="prenom"
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-team">
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          name="nom"
          value={nom}
          id="nom"
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-team">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          id="email"
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-team">
        <label htmlFor="tel">Numero de telephone</label>
        <input
          type="tel"
          name="tel"
          value={tel}
          id="tel"
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-team">
        <label htmlFor="formation-souhaite">Formation Souhaitée</label>
        <input
          type="text"
          name="formationSouhaite"
          value={formationSouhaite}
          id="formation-souhaite"
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-team">
        <label htmlFor="solde-cpf">Votre Solde CPF</label>
        <input
          type="number"
          name="soldeCPF"
          value={soldeCPF}
          id="solde-cpf"
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-team">
        <label htmlFor="date-rappel">Date du Rappel</label>
        <input
          type="date"
          name="dateRappel"
          value={dateRappel}
          id="date-rappel"
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-team">
        <label htmlFor="heure-rappel">Heure du Rappel</label>
        <input
          type="time"
          name="heureRappel"
          value={heureRappel}
          id="heure-rappel"
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-team msg">
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          value={message}
          id="message"
          onChange={onChangeHandler}
        />
      </div>

      <input type="submit" value="Envoyer" className="submit-btn" />
    </form>
  );
};

export default ContactForm;
