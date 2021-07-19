import React, { useState, useEffect} from "react";
import "./style.scss";
import { Link } from "react-router-dom";

//imgs
import logosvg from '../../assets/imgs/logosvg.svg';


function MessagesOptions(props) {

  // const [error, setError] = useState("");

  useEffect(() => {
   
  }, []);

  return (
    <section className="connexionform">
      <div className="container">
       <img src={logosvg} alt="logo"className="mainlogo" />
       <h2>Bienvenue sur AlertnGo</h2>
       <p>Veuillez saisir votre login et mot de passe ou si vous n'avez pas de compte, vous pouvez en créer un en cliquant sur le lien ci-dessous</p>
       <Link to="/signup" className="linkbuttons">Create an account</Link>
      </div>

      <form className="fillform">
       <lable>
         <p>Email</p>
         <input type="text" name="username" placeholder="Username" />
       </lable>
       <lable>
         <p>Mot de Pass</p>
         <input type="password" name="username" placeholder="Username" />
       </lable>
       <button>Login</button>
      </form>
    </section>
  );
}
export default MessagesOptions;
