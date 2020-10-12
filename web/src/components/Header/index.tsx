import React from 'react';

import './styles.css';
import { Logout } from '../../services/auth';
import { useHistory, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory()
  const handleLogout = (event: any) => {
    event.preventDefault();
    history.push("/")
    Logout()
  }

  return (
    <header className="header-page">
      <nav className="navigation-header">
        <ul>
          <li><h2>Chatify</h2></li>
          <li><hr/></li>
          <li><Link to="/home">Conversas</Link></li>
          <li><Link to="/search">Buscar Pessoas</Link></li>
          <li><button onClick={handleLogout}>deslogar</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;