import React, { useState, useEffect } from "react";
import "./style.scss";
import Notification from "../../components/Notification";
import { VoitureService } from "../../services";

//components
import MessagesOptions from "../../components/MessagesOptions";
import DefaultAnimation from "../../components/DefaultAnimation";
import NotFound from "../../components/NotFound";

//icons
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const Home = (props) => {
  const [ndp, setNdp] = useState("");
  const [userInfo, SetUserInfo] = useState("");
  const [bigerror, setBigError] = useState("");
  const [notif, setNotif] = useState(false);
  localStorage.setItem('Number', userInfo);
console.log(userInfo);

  const getCar = async (event) => {
    event.preventDefault();
    SetUserInfo("");
    if (ndp === "") {
      setNotif(true);
    } else {
      try {
        const userData = await VoitureService.getByNdp(ndp);
        const userDataNum = userData.data.data[0].telephone;
        SetUserInfo(userDataNum);
      } catch (error) {
        if (error) {
          console.log(error);
          if (error) {
            SetUserInfo(undefined);
          }
          setBigError(error);
        }
      }
    }
  };

  const unset = async () => {
    setNotif(false);
  };

  return (
    <main>
      <section>
        <form className="mainform">
          <label>
            Entrez le numéro de plaque d'immatriculation pour trouver et alerter
            le propriétaire
            <input
              className="searchBar"
              type="text"
              name="ndp"
              placeholder="AA000AA"
              maxLength="07"
              onChange={(e) => {
                setNdp(e.target.value);
              }}
            />
          </label>
          <button className="mainbutton" onClick={getCar}>
            <p>Rechercher</p>
            <SearchOutlinedIcon />
          </button>
        </form>
        {notif ? (
          <Notification
            notif="Veuillez saisir un numéro de plaque d'immatriculation"
            unsetfunction={unset}
          />
        ) : null}
      </section>
      {userInfo ? (
        <MessagesOptions />
      ) : userInfo == null ? (
        <NotFound />
      ) : (
        <DefaultAnimation />
      )}

    </main>
  );
};
export default Home;
