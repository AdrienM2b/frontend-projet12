import React from 'react';
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts';

export default function TodayScore({ data }) {
  const dataFormated = [{ name: 'Score', value: data }];
  const percentage = (data * 100).toFixed(0) + '%';
  return (
    <div className='today-score_container'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart
          innerRadius='80%'
          outerRadius='100%'
          data={dataFormated}
          startAngle={180}
          endAngle={-270}
        >
          <PolarAngleAxis type='number' domain={[0, 1]} tick={false} />
          <circle cx='50%' cy='50%' fill='white' r='90' z-index='2'></circle>
          <RadialBar
            background
            clockWise={true}
            dataKey='value'
            cornerRadius={30}
            fill='#e60000'
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
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
