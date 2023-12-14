import React, { useEffect, useState } from 'react';
import Greetings from './Greetings';
import DailyActivities from './DailyActivities';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AverageSessions from './AverageSessions';

function UserPage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessionData, setaverageSessionData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error('Erreur', error));
    axios
      .get(`http://localhost:3000/user/${id}/activity`)
      .then((response) => setActivityData(response.data))
      .catch((error) => console.error('Erreur', error));
    axios
      .get(`http://localhost:3000/user/${id}/average-sessions`)
      .then((response) => setaverageSessionData(response.data))
      .catch((error) => console.error('Erreur', error));
  }, [id]);

  if (!userData && !activityData && !averageSessionData) {
    // Si les données ne sont pas encore chargées, affichez un message de chargement
    return <p>Chargement...</p>;
  }

  // Si userData est chargé, continuez avec le rendu normal
  const firstName = userData.data.userInfos.firstName;
  const sessionsData = activityData.data.sessions;
  const averageSessions = averageSessionData.data.sessions;

  return (
    <div>
      <Greetings name={firstName} />
      <DailyActivities data={sessionsData} />
      <AverageSessions data={averageSessions} />
    </div>
  );
}

export default UserPage;
