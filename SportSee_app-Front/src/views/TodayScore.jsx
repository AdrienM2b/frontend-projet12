import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Layer } from 'recharts';

export default function TodayScore({ data }) {
  const dataFormated = [{ name: 'Score', value: data }];
  const startAngle = 180;
  //   const endAngle = -90;
  const backgroundCircleData = [{ value: 1 }];
  const scoreEndAngle = startAngle - data * 360;
  const percentage = (data * 100).toFixed(0) + '%';
  return (
    <div className='today-score_container'>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            data={dataFormated}
            cx='50%'
            cy='50%'
            startAngle={startAngle}
            endAngle={scoreEndAngle}
            innerRadius={65}
            outerRadius={80}
            fill='black'
            paddingAngle={5}
            dataKey='value'
            cornerRadius={55}
            activeIndex={0}
          >
            <Cell key={`cell-0`} fill='#e60000' />
          </Pie>
          <Pie
            data={backgroundCircleData}
            cx='51%'
            cy='51%'
            innerRadius={0} // Commence à partir du centre
            outerRadius={70} // Même taille que l'intérieur de la jauge
            fill='#f0f0f0' // Couleur de votre choix pour le cercle de fond
            dataKey='value'
            paddingAngle={-10}
          />
          <text
            x='50%'
            y='50%'
            dy={-10}
            textAnchor='middle'
            fill='#000000'
            fontSize='1.8em'
            fontWeight={700}
            className='percentage-text'
          >
            {percentage}
          </text>
          <text
            x='50%'
            y='50%'
            dy={20}
            textAnchor='middle'
            fill='#74798C'
            className='percentage-text'
          >
            de votre
          </text>
          <text
            x='50%'
            y='50%'
            dy={50}
            textAnchor='middle'
            fill='#74798C'
            className='percentage-text'
          >
            objectif
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
