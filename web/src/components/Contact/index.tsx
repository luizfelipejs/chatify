import React from 'react';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

interface Contact {
  id: string
  name: string
  createdAt: string
  create?: boolean
}

const Contact: React.FC<Contact> = ({ id, name, createdAt, create }) => {
  const history = useHistory()
  const handleCreate = async (event: any) => {
    if (create != undefined) {
      await api.post('/channel', { id })
      history.push('/home')
    }
  }


  return (
    <li onClick={handleCreate}>
      <div className="contact">
        <h1>Nome: {name}</h1>
        <h2>Criado em: {createdAt}</h2>
        <Link to={`/chat/${id}`}>
          Acessar 
        </Link>
      </div>
    </li>
  )
}

export default Contact;