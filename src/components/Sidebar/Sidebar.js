import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'; 

function Sidebar() {
  return (
    <div className="sidebar">
        <Link exact to="/">Главная</Link>
        <Link to="/adress">Адреса</Link>
    </div>
  );
}

export default Sidebar;
