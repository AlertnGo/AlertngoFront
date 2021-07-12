import React, { useState, useEffect } from "react";
import "./style.scss";

//icons
import EditRoundedIcon from '@material-ui/icons/EditRounded';

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
              <p>Modifier</p>
              <EditRoundedIcon/>
            </button>
          </div>
          <div className="infodiv">
            <h2>077655432</h2>
            <button className="button">
              <p>Modifier</p>
              <EditRoundedIcon/>
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
              <p>Suprimer</p>
              <EditRoundedIcon/>
            </button>
          </div>
        </div>
      </section>

      <section className="devider">
        <h3>Mes Vehicles</h3>
        <div className="infos">
          <div className="infodiv">
            <h2>ch 678 GT</h2>
            <button className="button">
              <p>Suprimer</p>
              <EditRoundedIcon/>
            </button>
            <button className="button">
              <p>Modifier</p>
              <EditRoundedIcon/>
            </button>
          </div>
        </div>
        <button className="button">
              <p>Ajouter un voiture</p>
              <EditRoundedIcon/>
            </button>
       
      </section>
    
    </section>
  );
}
export default MyProfile;
