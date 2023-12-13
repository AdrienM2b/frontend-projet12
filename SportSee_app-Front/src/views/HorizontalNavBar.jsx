import React from 'react';
import logoImage from '../assets/Sportify.png';
import '../styles/NavBar.scss';

export default function HorizontalNavBar() {
  return (
    <div className='horizontal-navbar_container'>
      <img className='logoImage' src={logoImage} alt='logo' />
      <p>Accueil</p>
      <p>Accueil</p>
      <p>Accueil</p>
      <p>Accueil</p>
    </div>
  );
}
