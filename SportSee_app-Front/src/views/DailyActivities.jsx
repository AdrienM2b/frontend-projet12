import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, XAxis, YAxis, Tooltip, Bar, Legend } from 'recharts';
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
    // Votre logique de formatage ici, par exemple :
    return tickItem + 1;
  };

  return (
    <div className='barchart_container'>
      <h3>Activité quotidienne</h3>
      <BarChart width={900} height={300} data={sessionsData}>
        <XAxis tickFormatter={formatXAxis} />
        <YAxis dataKey='kilogram' />
        <Tooltip />
        <Bar dataKey='calories' fill='#242424' barSize={20} />
        <Bar dataKey='kilogram' fill='#e60000' barSize={20} />
        <Legend align='right' verticalAlign='top' />
      </BarChart>
    </div>
  );
}
