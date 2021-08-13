import React, { useState, useEffect } from "react";
import { messagesServices } from "../../services";
import "./style.scss";

//icons
import SendRoundedIcon from "@material-ui/icons/SendRounded";

function MessagesOptions(props) {
  const [messages, setMessages] = useState([]);
  const [mymessages, setMymessages] = useState("");
  const [error, setError] = useState("");
  const PhoneNumber = localStorage.getItem("Number");

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

  const allmessages = document.querySelectorAll(".message p");
  allmessages.forEach((element) => {
    if (element.innerHTML == mymessages) {
      element.parentElement.classList.add("selected");
    } else {
      element.parentElement.classList.remove("selected");
    }
  });

  const handleSelect = async (e) => {
    setMymessages(e.target.innerHTML);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(PhoneNumber + " sending......... " + mymessages);
    window.location.href = "sent";
  };

  return (
    <section className="messagesection">
      {messages.map((message, index) => (
        <div key={index} className="message" onClick={handleSelect}>
          <p>{message.message}</p>
          <div className={messages.class}></div>
        </div>
      ))}

      <button className="mainbutton" onClick={sendMessage}>
        <p>Send</p>
        <SendRoundedIcon />
      </button>
    </section>
  );
}
export default MessagesOptions;
