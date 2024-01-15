import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

export default function Performance({ data }) {
  return (
    <div className='performance_container'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart outerRadius={78} data={data}>
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
