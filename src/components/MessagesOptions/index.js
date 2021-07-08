import { withRouter, Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { messagesServices } from "../../services";

import "./style.scss";

function MessagesOptions(props) {
  const [messages, setMessages] = useState([]);
  const [mymessages, setMymessages] = useState("");
  const [error, setError] = useState("");

  console.log(mymessages.message.message);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const Messages = await messagesServices.getAll();
        setMessages(Messages.data.data);
      } catch (error) {
        if (error) {
          console.log(error);
          setError(error);
        }
      }
    };

    getMessages();
  }, []);

  
  return (
    <section className="messagesection">
      {messages.map((message, index) => (
        <div className="message" key={index}>
        <label onClick={() => {
                setMymessages({message});
              }}>
          <input
            type="radio"
            className="message"
            name="mess"
          />
          <p>{message.message}</p></label>
        </div>
      ))}

  
    </section>
  );
}
export default MessagesOptions;
