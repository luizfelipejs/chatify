import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

import "./styles.css";
import Message from "../../components/Message";
import { useParams } from "react-router-dom";
import api from "../../services/api";

interface channel {
  id: string;
  users: any[];
  createdAt: string;
  messages: any[];
}

interface User {
  id: string;
  urlImage: string;
  username: string;
}

const ChatPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState({} as channel);
  const [userCurrent, setUserCurrent] = useState({} as User);

  const { id } = useParams() as { id: string };

  useEffect(() => {
    const loadChannel = async () => {
      const response = await api.get(`/channel/${id}`);
      const { data } = response;
      setChannel(data.channel);
    };
    loadChannel();
  });

  useEffect(() => {
    const currentUser = async () => {
      const response = await api.get("/user");
      const { data } = response;
      setUserCurrent(data.user);
    };
    currentUser();
  }, []);

  const handleSend = async (event: any) => {
    if (event.key === "Enter") {
      await api.post("/message", { idChannel: channel.id, content: message });
      setMessage("");
    }
  };

  const filterUserDiferentInChannel = () => {
    const diferentUser = channel.users.filter(
      (userChannel) => userChannel.id !== userCurrent.id
    );
    return diferentUser[0] as User;
  };

  const renderUsernameUser = () =>
    channel.users ? filterUserDiferentInChannel().username : "nada por aqui";

  const renderMessages = () => {
    return channel.messages.map((message, index) => {
      if (message.sender.id === userCurrent.id) {
       return <Message content={message.content} sender="me" key={index}/>;
      } else {
       return <Message content={message.content} sender="other" key={index}/>;
      }
    });
  };

  return (
    <div className="chat-page">
      <Header />
      <div className="contact-info">{renderUsernameUser()}</div>
      <ul className="messages-list">
        {channel.messages ? renderMessages() : ""}
      </ul>
      <input
        className="input-message"
        type="text"
        onKeyDown={handleSend}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default ChatPage;
