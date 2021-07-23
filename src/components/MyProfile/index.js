import React, { useState, useEffect } from "react";
import "./style.scss";
import userServices from "../../services/userService";
import voitureService from "../../services/voitureService";
//icons
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";

function MyProfile(props) {
  const [myinfo, setMyinfo] = useState([]);
  const [myCars, setMyCars] = useState([]);
  const [error, setError] = useState("");
  const userid = localStorage.getItem("id");

  const getProfile = async () => {
    try {
      const response = await userServices.profil(userid);
      setMyinfo(response.data.data[0]);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const getVehicles = async () => {
    try {
      const response = await userServices.getAllMyCars(userid);
      console.log(response.data.data);
      setMyCars(response.data.data);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    getProfile();
    getVehicles();
  }, []);

  return (
    <section className="myprofile">
      <section className="devider">
        <h3>Mes Informations</h3>
        <div className="infos">
          <div className="infodiv">
            <h2>
              {myinfo.name} {myinfo.lastname}
            </h2>
            <button className="button">
              <EditRoundedIcon />
              <p>Modifier</p>
            </button>
          </div>
          <div className="infodiv">
            <h2>{myinfo.telephone}</h2>
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
          {myCars.map((car, index) => (
                <div className="ndpdiv" key={index}>
                <p className="ndplate">{car.ndp}</p>
                <div className="buttonset">
                  <button className="button">
                    <DeleteRoundedIcon />
                    <p>Suprimer</p>
                  </button>
                  <button className="button">
                    <EditRoundedIcon />
                    <p>Modifier</p>
                  </button>
                </div>
              </div>
          ))}

      
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
