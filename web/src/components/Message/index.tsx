import React from "react";
import './styles.css'

interface MessageProps {
  sender: string
  content: string
}

const Message: React.FC<MessageProps> = ({sender, content}) => ( 
  <li className={sender}>{content}</li>
);


export default Message;