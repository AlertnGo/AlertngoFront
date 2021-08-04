import React, { useState, useEffect } from "react";
import { messagesServices } from "../../services";
import "./style.scss";

//icons
import SendRoundedIcon from "@material-ui/icons/SendRounded";

function MessagesOptions(props) {
  const [messages, setMessages] = useState([]);
  const [mymessages, setMymessages] = useState("");
  const [error, setError] = useState("");
  

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

  const allmessages = document.querySelectorAll(".message input");
console.log(allmessages);
  allmessages.forEach(element => {
    if (element.value == mymessages) {
     element.parentElement.classList.add("selected");
    }else{
      element.parentElement.classList.remove("selected");
    }
    
  });


  const handleSelect = async (e) => {
    setMymessages(e.target.value);
  }




  return (
    <section className="messagesection">
      {messages.map((message, index) => (
        <div key={index} htmlFor={"option" + message.id} className="message"  onClick={handleSelect}>
          <input
            type="radio"
            id={"option" + message.id}
            name="messageoption"
            value={message.message}
          />
          <label htmlFor={"option" + message.id}>{message.message}</label>
          <div className={messages.class}></div>
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
