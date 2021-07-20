import React, { useState, useEffect } from "react";
import { messagesServices } from "../../services";
import "./style.scss";

//icons
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function MessagesOptions(props) {
  const [messages, setMessages] = useState([]);
  const [mymessages, setMymessages] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getMessages = async () => {
      try {
        const Messages = await messagesServices.getAll();
        setMessages(Messages.data.data);
        console.log(Messages);
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
        <div
          className="message"
          key={index}
          onClick={() => {
            setMymessages({ message });
          }}
        >
          <label>
            <input type="radio" className="message" name="mess" />
            <p>{message.message}</p>
            <div className={message.type}></div>
          </label>
        </div>
      ))}
      <button className="mainbutton">
        <p>Send</p>
        <SendRoundedIcon />
      </button>
    </section>
  );
}
export default MessagesOptions;
