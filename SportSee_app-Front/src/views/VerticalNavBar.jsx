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
        <img src={yogaIcon} alt='' />
        <img src={swimIcon} alt='' />
        <img src={bikeIcon} alt='' />
        <img src={gymIcon} alt='' />
      </div>
    </aside>
  );
}
