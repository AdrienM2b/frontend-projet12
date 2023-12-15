import React, { useEffect, useState } from 'react';
import Greetings from './Greetings';
import DailyActivities from './DailyActivities';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AverageSessions from './AverageSessions';
import Performance from './Performance';
import TodayScore from './TodayScore';
import NutritionCounter from './NutritionCounter';

function UserPage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessionData, setaverageSessionData] = useState(null);
  const [performanceData, setperformanceData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error('Erreur', error));
  }, [id]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}/activity`)
      .then((response) => setActivityData(response.data))
      .catch((error) => console.error('Erreur', error));
  }, [id]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}/average-sessions`)
      .then((response) => setaverageSessionData(response.data))
      .catch((error) => console.error('Erreur', error));
  }, [id]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}/performance`)
      .then((response) => setperformanceData(response.data))
      .catch((error) => console.error('Erreur', error));
  }, [id]);

  if (!userData || !activityData || !averageSessionData || !performanceData) {
    // Si les données ne sont pas encore chargées, affichez un message de chargement
    return <p>Chargement...</p>;
  }

  // Si userData est chargé, continuez avec le rendu normal
  const sessionsData = activityData.data.sessions;
  const averageSessions = averageSessionData.data.sessions;
  const performanceKindOfWorkout = performanceData.data;

  return (
    <div className='main_container'>
      <Greetings name={userData.data.userInfos.firstName} />
      <div className='horizontal_container'>
        <div className='vertical_container'>
          <DailyActivities data={sessionsData} />
          <div className='stat-container'>
            <AverageSessions data={averageSessions} />
            <Performance data={performanceKindOfWorkout} />
            <TodayScore data={userData.data.todayScore} />
          </div>
        </div>
        <NutritionCounter data={userData} />
      </div>
    </div>
  );
}

export default UserPage;
