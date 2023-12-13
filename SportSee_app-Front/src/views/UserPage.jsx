import React, { useEffect, useState } from 'react';
import Greetings from './Greetings';
import DailyActivities from './DailyActivities';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UserPage() {
  const [userData, setUserData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/user/${id}`).then((response) => {
      setUserData(response.data);
    });
  }, [id]);

  return (
    <div>
      <Greetings />
      <DailyActivities />
    </div>
  );
}
