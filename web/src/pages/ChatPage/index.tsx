import React from 'react';
import Header from '../../components/Header';

import './styles.css';

const ChatPage: React.FC = () => {
  return (
    <div className="chat-page">
      <Header />
      <div className="contact-info">
        Conversando com marcio americo
      </div>
      <ul className="messages-list">
      
        <li className="other">
          test2
        </li>
      </ul>
      <input  className="input-message" type="text"/>
    </div>
  )
}

export default ChatPage;