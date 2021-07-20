import React, { useState, useEffect } from "react";
import "./style.scss";

//icons
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';


function MyProfile(props) {
  const [myinfo, setMyinfo] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {

  // }, []);

  return (
    <section className="myprofile">
      <section className="devider">
        <h3>Mes Informations</h3>
        <div className="infos">
          <div className="infodiv">
            <h2>Vishnu Gopy</h2>
            <button className="button">
              <EditRoundedIcon />
              <p>Modifier</p>
            </button>
          </div>
          <div className="infodiv">
            <h2>077655432</h2>
            <button className="button">
              <EditRoundedIcon />
              <p>Modifier</p>
            </button>
          </div>
          <button className="button super">
          <ExitToAppRoundedIcon />
          <p>Déconnecter</p>
        </button>
        </div>
        
      </section>

      <section className="devider">
        <h3>Theme</h3>
        <div className="infos">
          <div className="infodiv">
            <h2>Mode Sombre</h2>
            <button className="button">
              <Brightness4RoundedIcon />
              <p>Toggle</p>
            </button>
          </div>
        </div>
      </section>

      <section className="devider">
        <h3>Mes Vehicles</h3>
        <div className="ndpdivider">

          <div className="ndpdiv">
            <p className="ndplate">ch 678 GT</p>
            <div className="buttonset">
            <button className="button">
              <DeleteRoundedIcon />
              <p>Suprimer</p>
            </button>
            <button className="button">
              <EditRoundedIcon />
              <p>Modifier</p>
            </button></div>
          </div>


          <div className="ndpdiv">
            <p className="ndplate">ch 678 GT</p>
            <div className="buttonset">
            <button className="button">
              <DeleteRoundedIcon />
              <p>Suprimer</p>
            </button>
            <button className="button">
              <EditRoundedIcon />
              <p>Modifier</p>
            </button></div>
          </div>


          <div className="ndpdiv">
            <p className="ndplate">ch 678 GT</p>
            <div className="buttonset">
            <button className="button">
              <DeleteRoundedIcon />
              <p>Suprimer</p>
            </button>
            <button className="button">
              <EditRoundedIcon />
              <p>Modifier</p>
            </button></div>
          </div>

        </div>
        <button className="button super">
          <AddBoxRoundedIcon />
          <p>Ajouter un voiture</p>
        </button>
      </section>
    </section>
  );
}
export default MyProfile;
