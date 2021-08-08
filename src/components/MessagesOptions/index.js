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
    // var axios = require("axios").default;

    // var options = {
    //   method: 'POST',
    //   url: 'https://clicksend.p.rapidapi.com/sms/send',
    //   headers: {
    //     'content-type': 'application/json',
    //     authorization: 'Basic dmlzaG51Z29ieTAwMTA6Z3RZNkxXSDdLa3hVeCVK',
    //     'x-rapidapi-key': '0562cce25emshb2665f0728e14f4p1ef2f1jsn9801b0ee8fbe',
    //     'x-rapidapi-host': 'clicksend.p.rapidapi.com'
    //   },
    //   data: {
    //     messages: [
    //       {
    //         source: 'mashape',
    //         from: 'Alertngo',
    //         body: mymessages,
    //         to: '0033663376422',
    //         schedule: '1452244637',
    //         custom_string: 'Alert'
    //       }
    //     ]
    //   }
    // };
    
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    //   if (response.data.response_code == "SUCCESS") {
    //     window.location.href = "sent";
    //   }
    // }).catch(function (error) {
    //   console.error(error);
    // });
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
