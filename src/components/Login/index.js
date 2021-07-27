import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import userServices from "../../services/userService";

//imgs
import logosvg from "../../assets/imgs/logosvg.svg";

function Login(props) {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    const user = {
      email: email,
      password: password,
    };
    try {
      e.preventDefault();
      const response = await userServices.login(user);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.user.userId);
        window.location.href = "/me"
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
            {error} <button onClick={() => setError("")}> X </button>{" "}
          </h5>
        )}
      </div>

      <form className="fillform"onSubmit={login}>
        <label>
          <p>
            Email<span>*</span>
          </p>
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <p>
            Mot de Pass<span>*</span>
          </p>
          <input
            type="password"
            name="passsword"
            placeholder="Motdepass"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="submitbutton">Login</button>
        <p>
          Veuillez saisir votre login et mot de passe ou si vous n'avez pas de
          compte, vous pouvez en créer un en cliquant sur le lien ci-dessous
        </p>
        <Link to="/me/signup" className="linkbuttons">
          Créer un compte
        </Link>
      </form>
    </section>
  );
}
export default Login;
