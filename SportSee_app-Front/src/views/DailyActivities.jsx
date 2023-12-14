import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';
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
  const [userData, setUserData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${id}/activity`).then((response) => {
      setUserData(response.data);
    });
  }, [id]);

  console.log(userData);

  if (!userData) {
    return <p>Chargement...</p>;
  }

  const sessionsData = userData.data.sessions;
  const formatXAxis = (tickItem) => {
    return new Date(tickItem).getDate();
  };

  return (
    <div className='barchart_container'>
      <h3>Activité quotidienne</h3>
      <BarChart
        width={900}
        height={300}
        data={sessionsData}
        margin={{ top: 10, right: 30, left: 20, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray='3 3' stroke='' />
        <ReferenceLine yAxisId='right' y='40' />
        <ReferenceLine yAxisId='right' y='80' />
        <XAxis dataKey='day' stroke='#9B9EAC' tickFormatter={formatXAxis} />
        <YAxis yAxisId='left' orientation='left' stroke='#9B9EAC' hide />
        <YAxis yAxisId='right' orientation='right' stroke='#9B9EAC' />
        <Tooltip />
        <Bar
          yAxisId='right'
          dataKey='kilogram'
          fill='#242424'
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId='left'
          dataKey='calories'
          fill='#e60000'
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
        <Legend
          verticalAlign='top'
          layout='horizontal'
          align='right'
          wrapperStyle={{ top: '-15%', right: '10%' }}
        />
      </BarChart>
    </div>
  );
}
