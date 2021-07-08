import { withRouter, Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { messagesServices } from "../../services";

import "./style.scss";

function MessagesOptions(props) {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  console.log(messages);
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
        <div  className="message" key={index}>
          <p>{message.message}</p>
          <div className={message.class}></div>
        </div>
      ))}
    </section>
  );
}
export default MessagesOptions;
