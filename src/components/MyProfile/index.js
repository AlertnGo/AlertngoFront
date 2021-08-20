import React, { useState, useEffect } from "react";
import "./style.scss";
import userServices from "../../services/userService";
import voitureService from "../../services/voitureService";
import { useHistory } from "react-router-dom";

//componants
import AddPage from "../Addpage";
import Notification from "../Notification";
//icons
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";

function MyProfile(props) {
  const [myinfo, setMyinfo] = useState([]);
  const [myCars, setMyCars] = useState([]);
  const [newNdp, setNewNdp] = useState("");
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [toggle, setToggle] = useState(false);
  const [nameToggle, setNameToggle] = useState(false);
  const [numToggle, setNumToggle] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const userid = localStorage.getItem("id");

  if (userid === null) {
    history.push("/me/login");
  }

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

  const addNew = async (e) => {
    const ndp = newNdp;
    e.preventDefault();
    try {
      const response = await voitureService.addCar(ndp, userid);
      getVehicles();
      setNewNdp("");
      setToggle(!toggle);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const changeName = async (e) => {
    e.preventDefault();
    try {
      await userServices.changeMyName(newName, userid);
      getProfile();
      setNewName("");
      setNameToggle(!nameToggle);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const changeNum = async (e) => {
    e.preventDefault();
    try {
      await userServices.changeMyNum(newNum, userid);
      getProfile();
      setNewName("");
      setNumToggle(!numToggle);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const signout = async () => {
    localStorage.clear();
    history.push("/me/login");
  };


  const deleteOneCar = async (e) => {
    const id = e.currentTarget.id;
    console.log(e.currentTarget.id);
    try {
      await voitureService.deleteCar(id);
      getVehicles();
    } catch (error) {
      setError(error);
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
              {myinfo.name}
            </h2>
            <button className="button" onClick={() => setNameToggle(!nameToggle)}>
              <EditRoundedIcon />
              <p>Modifier</p>
            </button>
            
          </div>
          {nameToggle === true ? (
          <AddPage
            addeSubmit={changeName}
            lable="Name"
            change={(e) => setNewName(e.target.value)}
            placeholder= {myinfo.name}
            max="20"
            cancel={() => setNameToggle(!nameToggle)}
          />
        ) : null}
          <div className="infodiv">
            <h2>{myinfo.telephone}</h2>
            <button className="button"onClick={() => setNumToggle(!numToggle)}>
              <EditRoundedIcon />
              <p>Modifier</p>
            </button>
          </div>
          {numToggle === true ? (
          <AddPage
            addeSubmit={changeNum}
            lable="Num"
            change={(e) => setNewNum(e.target.value)}
            placeholder= "0770000007"
            max="10"
            cancel={() => setNumToggle(!numToggle)}
          />
        ) : null}
          <button className="button super" onClick={signout}>
            <ExitToAppRoundedIcon />
            <p>Déconnecter</p>
          </button>
        </div>
      </section>

      {/* <section className="devider">
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
      </section> */}

      <section className="devider">
        <h3>Mes Vehicles</h3>

        <div className="ndpdivider">
          {myCars.length === 0 ? (
            <p className="specialtext">
              Vous n'avez pas encore ajouté votre véhicule, cliquez sur le
              bouton ci-dessous pour ajouter vos véhicules
            </p>
          ) : null}
          {myCars.map((car, index) => (
            <div className="ndpdiv" key={index}>
              <p className="ndplate">{car.ndp}</p>
              <div className="buttonset">
                <button className="button" id={car.id} onClick={deleteOneCar}>
                  <DeleteRoundedIcon />
                  <p>Suprimer</p>
                </button>
               
              </div>
            </div>
          ))}
        </div>
        {toggle === true ? (
          <AddPage
            addeSubmit={addNew}
            lable="Numéro de d'immatriculation"
            change={(e) => setNewNdp(e.target.value)}
            placeholder="AA000AA"
            max="7" cancel={() => setToggle(!toggle)}/>
        ) : null}
        <button className="button super" onClick={(e) => setToggle(!toggle)}>
          <AddBoxRoundedIcon />
          <p>Ajouter</p>
        </button>
      </section>
      {error === "" ? null : (
          < Notification notif={error} unsetfunction={() => setError("")}/>
        )}
    </section>
  );
}
export default MyProfile;
