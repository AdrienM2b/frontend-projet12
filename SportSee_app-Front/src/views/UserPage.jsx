import React, { useEffect, useState } from 'react';
import Greetings from './Greetings';
import DailyActivities from './DailyActivities';
import AverageSessions from './AverageSessions';
import Performance from './Performance';
import TodayScore from './TodayScore';
import NutritionCounter from './NutritionCounter';
import { useParams } from 'react-router-dom';
import fetchUserData from '../GetData';

function UserPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await fetchUserData(id);
      setData(userData);
    }

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Chargement...</div>;
  }

  // Utilisez les données ici
  const { userData, activityData, averageSessionData, performanceData } = data;

  return (
    <div className='main_container'>
      <Greetings name={userData.userInfos.firstName} />
      <div className='horizontal_container'>
        <div className='vertical_container'>
          <DailyActivities data={activityData} />
          <div className='stat-container'>
            <AverageSessions data={averageSessionData} />
            <Performance data={performanceData} />
            <TodayScore data={userData.todayScore} />
          </div>
        </div>
        <NutritionCounter data={userData} />
      </div>
    </div>
  );
}

export default UserPage;
