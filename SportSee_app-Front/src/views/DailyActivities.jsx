import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import axios from 'axios';

const data = [
  {
    day: '2020-07-01',
    kilogram: 80,
    calories: 240,
  },
  {
    day: '2020-07-02',
    kilogram: 80,
    calories: 220,
  },
];
export default function DailyActivities() {
  return (
    <div className='barchart_container'>
      <h3>Activité quotidienne</h3>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='weight' fill='#8884d8' />
        <Bar dataKey='calories' fill='#82ca9d' />
      </BarChart>
    </div>
  );
}
