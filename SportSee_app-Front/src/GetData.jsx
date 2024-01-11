import axios from 'axios';

export default async function fetchUserData(userId) {
  try {
    const userResponse = await axios.get(
      `http://localhost:3000/user/${userId}`
    );
    const activityResponse = await axios.get(
      `http://localhost:3000/user/${userId}/activity`
    );
    const averageSessionResponse = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    const performanceResponse = await axios.get(
      `http://localhost:3000/user/${userId}/performance`
    );
    return {
      userData: userResponse.data.data,
      activityData: activityResponse.data.data,
      averageSessionData: averageSessionResponse.data.data,
      performanceData: performanceResponse.data.data,
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des données', error);
    // Gérez l'erreur comme vous le souhaitez (par exemple, retourner un état d'erreur)
    return null;
  }
}
