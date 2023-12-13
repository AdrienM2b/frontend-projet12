import React from 'react';
import logoImage from '../assets/Sportify.png';
import '../styles/HorizontalNavBar.scss';

export default function HorizontalNavBar() {
  return (
    <div className='navbar_container'>
      <img className='logoImage' src={logoImage} alt='logo' />
      <p>Accueil</p>
      <p>Accueil</p>
      <p>Accueil</p>
      <p>Accueil</p>
    </div>
  );
}
