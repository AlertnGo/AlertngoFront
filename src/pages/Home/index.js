import React, { useState, useEffect } from "react";
import "./style.scss";
import Notification from "../../components/Notification";
import { VoitureService } from "../../services";
import { FormatAlignJustify } from "@material-ui/icons";
import MessagesOptions from "../../components/MessagesOptions";


const Home = (props) => {
  const [ndp, setNdp] = useState("");
  const [userInfo, SetUserInfo] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("done");
  }, []);

  const getCar = async (event) => {
    event.preventDefault();
    try {
      console.log("here    " + ndp);
      const userData = await VoitureService.getByNdp(ndp);
      const userDataNum = userData.data.data[0].telephone;
      SetUserInfo(userDataNum);
    } catch (error) {
      if (error) {
        console.log(error);
        setError(error);
      }
    }
  };

  return (
    <main>
      <h1>Home</h1>
      <section>
        <form className="mainform">
          <label>
            Entrez le numéro de plaque d'immatriculation pour trouver et alerter
            le propriétaire
            <input
              className="searchBar"
              type="text"
              name="ndp"
              placeholder="AA555AA"
              maxLength="10"
              onChange={(e) => {
                setNdp(e.target.value);
              }}
            />
          </label>
          <button className="mainbutton" onClick={getCar}>
            Search
          </button>
        </form>
      </section>

      <MessagesOptions/>
    </main>
  );
};

export default Home;
