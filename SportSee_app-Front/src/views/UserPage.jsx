import React, { useEffect, useState } from 'react';
import Greetings from './Greetings';
import DailyActivities from './DailyActivities';
import AverageSessions from './AverageSessions';
import Performance from './Performance';
import TodayScore from './TodayScore';
import NutritionCounter from './NutritionCounter';
import { FormattedData } from '../services/FormattedData.js';
import { useParams } from 'react-router-dom';

const userDataMain = {
  id: 12,
  userInfos: {
    firstName: 'Karl',
    lastName: 'Dovineau',
    age: 31,
  },
  todayScore: 0.12,
  keyData: {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
  },
};

const userActivity = {
  userId: 12,
  sessions: [
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
    {
      day: '2020-07-03',
      kilogram: 81,
      calories: 280,
    },
    {
      day: '2020-07-04',
      kilogram: 81,
      calories: 290,
    },
    {
      day: '2020-07-05',
      kilogram: 80,
      calories: 160,
    },
    {
      day: '2020-07-06',
      kilogram: 78,
      calories: 162,
    },
    {
      day: '2020-07-07',
      kilogram: 76,
      calories: 390,
    },
  ],
};

const averageSeesion = {
  userId: 12,
  sessions: [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ],
};

// const userPerformance = {
//   userId: 12,
//   kind: {
//     1: 'cardio',
//     2: 'energy',
//     3: 'endurance',
//     4: 'strength',
//     5: 'speed',
//     6: 'intensity',
//   },
//   data: [
//     {
//       value: 80,
//       kind: 1,
//     },
//     {
//       value: 120,
//       kind: 2,
//     },
//     {
//       value: 140,
//       kind: 3,
//     },
//     {
//       value: 50,
//       kind: 4,
//     },
//     {
//       value: 200,
//       kind: 5,
//     },
//     {
//       value: 90,
//       kind: 6,
//     },
//   ],
// };

function UserPage() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    FormattedData(id).then((formattedData) => {
      setData(formattedData);
    });
  }, [id]);

  console.log(data);

  if (
    !data ||
    !data.mainData ||
    !data.userSession ||
    !data.userActivity ||
    !data.userPerformance
  ) {
    return <div>Chargement...</div>;
  }

  return (
    <div className='main_container'>
      <Greetings name={data.mainData.userData.userInfos.firstName} />
      <div className='horizontal_container'>
        <div className='vertical_container'>
          <DailyActivities data={data.userSession} />
          <div className='stat-container'>
            <AverageSessions data={data.userActivity} />
            <Performance data={data.userPerformance} />
            <TodayScore data={data.mainData} />
          </div>
        </div>
        <NutritionCounter data={userDataMain} />
      </div>
    </div>
  );
}

export default UserPage;
