import React, { useState, useEffect} from "react";
import "./style.scss";
import { Link } from "react-router-dom";

//imgs
import logosvg from '../../assets/imgs/logosvg.svg';


function Login(props) {

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
         <p>Mot de Pass*</p>
         <input type="password" name="passsword" placeholder="Motdepass" required />
       </label>
       <button className="button">Login</button>
       <p>Veuillez saisir votre login et mot de passe ou si vous n'avez pas de compte, vous pouvez en créer un en cliquant sur le lien ci-dessous</p>
       <Link to="/me/signup" className="linkbuttons">Créer un compte</Link>
      </form>
      
    </section>
  );
}
export default Login;
