import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

const motEnFrancais = [
  'Cardio',
  'Energie',
  'Endurance',
  'Force',
  'Vitesse',
  'Intensité',
];

export default function Performance({ data }) {
  const dataFormated = data.data.map((item) => {
    let newKindIndex = item.kind - 1;
    return {
      subject: motEnFrancais[newKindIndex],
      value: item.value,
    };
  });

  const [first, second, ...rest] = dataFormated;
  const newDisplayForKind = [...rest, first, second];

  return (
    <div className='performance_container'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart outerRadius={78} data={newDisplayForKind}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey='subject'
            fontSize={'12px'}
            tick={{ fill: 'white', fontWeight: 500 }}
            tickSize={15}
          />
          <PolarRadiusAxis tickCount={6} stroke='none' />
          <Radar dataKey='value' fill='#e60000' opacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
