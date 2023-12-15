import React from 'react';
import bikeIcon from '../assets/bike.png';
import gymIcon from '../assets/gym.png';
import swimIcon from '../assets/swim.png';
import yogaIcon from '../assets/yoga.png';
import '../styles/NavBar.scss';

export default function VerticalNavBar() {
  return (
    <aside className='vertical-navbar_container'>
      <div className='logo_container'>
        <a href='#'>
          <img src={yogaIcon} alt='' />
        </a>
        <a href='#'>
          <img src={swimIcon} alt='' />
        </a>
        <a href='#'>
          <img src={bikeIcon} alt='' />
        </a>
        <a href='#'>
          <img src={gymIcon} alt='' />
        </a>
      </div>
    </aside>
  );
}
