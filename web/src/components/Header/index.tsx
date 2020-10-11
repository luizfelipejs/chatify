import React from 'react';

import './styles.css';

const Header: React.FC = () => {
  return (
    <header className="header-page">
      <nav className="navigation-header">
        <ul>
          <li><h2>Chatify</h2></li>
          <li><hr/></li>
          <li><a href="asfsdasd">Conversas</a></li>
          <li><a href="SADASD">Buscar Pessoas</a></li>
          <li><button>deslogar</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;