import React from 'react';
import logoImage from '../assets/Sportify.png';
import '../styles/NavBar.scss';

export default function HorizontalNavBar() {
  return (
    <div className='horizontal-navbar_container'>
      <img className='logoImage' src={logoImage} alt='logo' />
      <a href='#'>Accueil</a>
      <a href='#'>Profil</a>
      <a href='#'>Réglage</a>
      <a href='#'>Communauté</a>
    </div>
  );
}
