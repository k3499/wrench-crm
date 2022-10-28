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
          <li className='nav__item'><NavLink to="/adress" className='nav__link nav__link-lupa' activeClassName="nav__link_active">Поиск адресов</NavLink></li>
          <li className='nav__item'><NavLink to="/tables" className='nav__link nav__link-tables' activeClassName="nav__link_active">Таблицы</NavLink></li>
          <li className='nav__item'><NavLink to="/clendar" className='nav__link nav__link-clendar' activeClassName="nav__link_active">Календарь</NavLink></li>
          <li className='nav__item'><NavLink to="/maps" className='nav__link nav__link-maps' activeClassName="nav__link_active">Карты</NavLink></li>
          <li className='nav__item'><NavLink to="/widgets" className='nav__link nav__link-widgets' activeClassName="nav__link_active">Виджеты</NavLink></li>
          <li className='nav__item'><NavLink to="/setting" className='nav__link nav__link-setting' activeClassName="nav__link_active">Настройки</NavLink></li>
          <li className='nav__item'><NavLink to="/exit" className='nav__link nav__link-exit' activeClassName="nav__link_active">Выход</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
