import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import userServices from "../../services/userService";

//imgs
import logosvg from "../../assets/imgs/logosvg.svg";

function Signup(props) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState("");
  console.log(email);

  const signup = async (e) => {
    const user = {
      nom: nom,
      prenom: prenom,
      email: email,
      password: password,
      telephone: telephone,
    };
    try {
      e.preventDefault();
      const response = await userServices.signup(user);
      if (response.status === 201) {
        window.location.href = "/me";
      }
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <section className="connexionform">
      <div className="container">
        <img src={logosvg} alt="logo" className="mainlogo" />
        <h2>Bienvenue sur AlertnGo</h2>
        {error === "" ? null : (
          <h5>
            {" "}
            {error} <button onClick={() => setError("")}> X </button>
          </h5>
        )}
      </div>

      <form className="fillform" onSubmit={signup}>
        <label>
          <p>
            Email<span>*</span>
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Email"
            required
          />
        </label>
        <label>
          <p>
            Nom<span>*</span>
          </p>
          <input
            onChange={(e) => setNom(e.target.value)}
            type="text"
            name="firstname"
            placeholder="Nom"
            required
          />
        </label>
        <label>
          <p>
            Prenom<span>*</span>
          </p>
          <input
            onChange={(e) => setPrenom(e.target.value)}
            type="text"
            name="lastname"
            placeholder="Prenom"
            required
          />
        </label>
        <label>
          <p>
            Mot de passe<span>*</span>
          </p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            name="password"
            placeholder="Mot de passe"
            required
          />
        </label>
        <label>
          <p>
            Numero de telephone<span>*</span>
          </p>
          <input
            onChange={(e) => setTelephone(e.target.value)}
            type="phone"
            name="telephone"
            placeholder="Telephone"
            maxLength="13"
            required
          />
        </label>
        <button className="submitbutton" type="submit">
          Se Login
        </button>
        <p>
          Veuillez remplir correctement les champs ci-dessus pour vous inscrire.
          Si vous êtes déjà inscrit, veuillez vous connecter en cliquant sur le
          lien ci-dessous.
        </p>
        <Link to="/me" className="linkbuttons">
          Se connecter
        </Link>
      </form>
    </section>

  );
}
export default Signup;
