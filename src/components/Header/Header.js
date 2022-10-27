import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div className="header">
      <Link exact to="/">Главная</Link>
      <Link to="/adress">Адреса</Link> 
    </div>
  );
}

export default Header;
