import React, { useState, useEffect} from "react";
import "./style.scss";
import { Link } from "react-router-dom";

//imgs
import logosvg from '../../assets/imgs/logosvg.svg';


function Signup(props) {

  // const [error, setError] = useState("");

  useEffect(() => {
   
  }, []);

  return (
    <section className="connexionform">
      <div className="container">
       <img src={logosvg} alt="logo"className="mainlogo" />
       <h2>Bienvenue sur AlertnGo</h2>
      </div>

      <form className="fillform">
      <label>
         <p>Email*</p>
         <input type="text" name="email" placeholder="Email" required />
       </label>
       <label>
         <p>Nom*</p>
         <input type="text" name="firstname" placeholder="Nom" required />
       </label>
       <label>
         <p>Prenom*</p>
         <input type="text" name="lastname" placeholder="Prenom" required />
       </label>
       <label>
         <p>Mot de passe</p>
         <input type="text" name="password" placeholder="Mot de passe" required />
       </label>
       <label>
         <p>Numero de telephone</p>
         <input type="phone" name="telephone" placeholder="Telephone" maxlength="13" required />
       </label>
       <button className="button">Login</button>
       <p>Veuillez remplir correctement les champs ci-dessus pour vous inscrire. Si vous êtes déjà inscrit, veuillez vous connecter en cliquant sur le lien ci-dessous.</p>
       <Link to="/me/login" className="linkbuttons">Me connecter</Link>
      </form>
      
    </section>
  );
}
export default Signup;
