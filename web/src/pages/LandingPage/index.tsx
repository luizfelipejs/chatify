import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="text-landing">
        <h1>Chatify</h1>
        <h2>Seu app de conversas</h2>
        <p>
          Entre e fique a vontade, convide seus amigos para plataforma
        </p>
      </div>
      <nav className="navigation-landing">
        <ul className="links">
          <li className="register">
            <Link to="/register">Registrar-se</Link>
          </li>
          <li className="logon">
            <Link to="/login">Fazer Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
} 

export default LandingPage;