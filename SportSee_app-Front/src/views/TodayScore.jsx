import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';

export default function TodayScore({ data }) {
  const dataFormated = [{ name: 'Score', value: data }];
  const startAngle = 180;
  //   const endAngle = -90;
  const scoreEndAngle = startAngle - data * 360;
  const percentage = (data * 100).toFixed(0) + '%';
  return (
    <ResponsiveContainer
      className='today-score_container'
      width={250}
      height={250}
    >
      <PieChart width={40} height={40}>
        <Pie
          data={dataFormated}
          cx={100}
          cy={100}
          startAngle={startAngle}
          endAngle={scoreEndAngle}
          innerRadius={60}
          outerRadius={80}
          fill='black'
          paddingAngle={5}
          dataKey='value'
          cornerRadius={50}
          activeIndex={0}
        >
          <Cell key={`cell-0`} fill='black' />
          <Cell key={`cell-1`} fill='transparent' />
        </Pie>
        <text
          x='50%'
          y='50%'
          dy={-10}
          textAnchor='middle'
          fill='#000000'
          fontSize='30'
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
  );
}
