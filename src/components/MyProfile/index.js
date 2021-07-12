import React, { useState, useEffect } from "react";
import "./style.scss";

//icons
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import ToggleOffRoundedIcon from '@material-ui/icons/ToggleOffRounded';

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
        </div>
      </section>

      <section className="devider">
        <h3>Theme</h3>
        <div className="infos">
          <div className="infodiv">
            <h2>Mode Sombre</h2>
            <button className="button">
              <ToggleOffRoundedIcon />
              <p>Toggle</p>
            </button>
          </div>
        </div>
      </section>

      <section className="devider">
        <h3>Mes Vehicles</h3>
        <div className="infos">
          <div className="infodiv">
            <h2 className="ndplate">ch 678 GT</h2>
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
