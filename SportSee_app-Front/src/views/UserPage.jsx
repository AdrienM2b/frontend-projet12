import React, { useEffect, useState } from 'react';
import Greetings from './Greetings';
import DailyActivities from './DailyActivities';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserPage() {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((response) => {
        setUserData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, [id]);

  if (!userData) {
    // Si les données ne sont pas encore chargées, affichez un message de chargement
    return <p>Chargement...</p>;
  }

  // Si userData est chargé, continuez avec le rendu normal
  const firstName = userData.data.userInfos.firstName;

  return (
    <div>
      <Greetings name={firstName} />
      <DailyActivities />
    </div>
  );
}

export default UserPage;
