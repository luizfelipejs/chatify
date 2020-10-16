import React, { useEffect, useState } from 'react';
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import Input from '../../components/Input';

import './styles.css';
import api from '../../services/api';

interface User {
  id: string;
  createdAt: string;
  urlImage: string;
  username: string;
}

const SearchPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>()
  const [searchWord, setSearchWord] = useState('')

  const handleSearch = async (event: any) => {
    event.preventDefault()
    const response = await api.get(`/user-search/${searchWord}`)
    setUsers(response.data)
  }

  return (
    <div className="search-page">
      <Header />
      <Input 
        name="Digite o contato que você quer procurar"
        value={searchWord}
        onChange={e => setSearchWord(e.target.value)} 
        label="search"/>
      <button className="search" onClick={handleSearch} >Procurar</button>
      <ul className="contacts-search">
        {
          users ? users.map(user => 
          <Contact 
            name={user.username} 
            createdAt={user.createdAt} 
            id={user.id}
            create={true}
          />
          ) : "Nada por aqui"
        }
      </ul>
    </div>
  )
}

export default SearchPage;