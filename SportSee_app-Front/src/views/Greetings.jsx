import React from 'react';

export default function Greetings({ name }) {
  return (
    <div className='greetings_container'>
      <h2 className='greetings_container-title'>
        Bonjour <p className='name'>{name}</p>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
