import React from 'react';
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import Input from '../../components/Input';

import './styles.css';

const SearchPage: React.FC = () => {
  return (
    <div className="search-page">
      <Header />
      <Input name="Digite o contato que você quer procurar" label="search"/>
      <button className="search">Procurar</button>
      <ul className="contacts-search">
        <Contact name="test" createdAt="asdas" id="asdasd"/>
      </ul>
    </div>
  )
}

export default SearchPage;