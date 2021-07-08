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


    </section>
  )
  
}
export default MessagesOptions;
