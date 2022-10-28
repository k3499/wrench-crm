import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='header__container'>
          <Link className='header__logo header__text' exac to='/'>Wrench CRM</Link>
          <Link className='header__user header__text' to='/account'>Имя Фамилия</Link>
      </div> 
    </div>
  );
}

export default Header;
