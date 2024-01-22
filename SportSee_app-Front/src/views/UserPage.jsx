import React, { useEffect, useState } from 'react';
import Greetings from './Greetings';
import DailyActivities from './DailyActivities';
import AverageSessions from './AverageSessions';
import Performance from './Performance';
import TodayScore from './TodayScore';
import NutritionCounter from './NutritionCounter';
import { FormattedData } from '../services/FormattedData.js';
import { useParams } from 'react-router-dom';

function UserPage() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    FormattedData(id).then((formattedData) => {
      setData(formattedData);
    });
  }, [id]);

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
        <NutritionCounter data={data.mainData.userData.keyData} />
      </div>
    </div>
  );
}

export default UserPage;
