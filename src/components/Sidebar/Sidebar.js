import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom'; 

function Sidebar() {
  return (
    <div className='sidebar'>
      <p className='nav-title'>Меню</p>
      <nav>
        <ul className='nav'>
          <li className='nav__item'><NavLink exact to="/" className='nav__link nav__link-home' activeClassName="nav__link_active">Главная</NavLink></li>
          <li className='nav__item'><NavLink to="/adress" className='nav__link nav__link-lupa' activeClassName="nav__link_active">Адреса</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
