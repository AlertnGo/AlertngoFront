import React, { useState, useEffect } from "react";
import "./style.scss";

function MyProfile(props) {
  const [messages, setMessages] = useState([]);
  const [mymessages, setMymessages] = useState("");
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
            <button>edit</button>
          </div>
          <div className="infodiv">
            <h2>077655432</h2>
            <button>edit</button>
          </div>
        </div>
      </section>

      <section className="devider">
        <h3>Theme</h3>
        <div className="infos">
          <div className="infodiv">
            <h2>Mode Sombre</h2>
            <button>toggle</button>
          </div>
        </div>
      </section>

      <section className="devider">
        <h3>Mes Vehicles</h3>
        <div className="infos">
          <div className="infodiv">
            <h2>ch 678 GT</h2>
            <button>delete</button>
            <button>edit</button>
          </div>
        </div>
        <button>add</button>
      </section>

    </section>
  );
}
export default MyProfile;
