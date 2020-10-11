import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

interface Contact {
  id: string
  name: string
  createdAt: string
}

const Contact: React.FC<Contact> = ({ id, name, createdAt }) => {
  return (
    <li>
      <div className="contact">
        <h1>Nome: {name}</h1>
        <h2>Sala criada em: {createdAt}</h2>
        <Link to={`/chat/${id}`}>
          Acessar Sala
        </Link>
      </div>
    </li>
  )
}

export default Contact;