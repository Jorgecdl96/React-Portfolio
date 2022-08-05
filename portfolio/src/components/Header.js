import React from 'react';
import Navigation from './Navigation';
import Avatar from '../Assets/avatar.png';
import '../styles/Header.css';

function Header() {
  return (
    
    <div className='header'>
      <div id="name-avatar">
            <img src={Avatar} alt="avatar" class="avatar"/>
            <h1>Jorge Cardenas</h1>
        </div>
        <Navigation/>
    </div>
  )
}

export default Header