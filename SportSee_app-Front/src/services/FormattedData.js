import getData from './GetData';

export async function FormattedData(id) {
  const data = await getData(id);
  const mainData = mainUserData(data);
  const userSession = sessionData(data);
  const userActivity = activityData(data);
  const userPerformance = performanceData(data);

  return { mainData, userSession, userActivity, userPerformance };
}

function mainUserData(data) {
  if (data[0]) {
    const userData = data[0].data.data;

    const convertInPercentage = userData.todayScore * 100;
    const scoreInString = convertInPercentage.toString() + '%';
    const todayScoreFormated = [{ name: 'Score', value: userData.todayScore }];

    return { userData, scoreInString, todayScoreFormated };
  }
}

function sessionData(data) {
  if (data[1]) {
    const sessionsData = data[1].data.data.sessions;
    return sessionsData;
  }
}

function activityData(data) {
  if (data[2]) {
    const activityData = data[2].data.data.sessions;

    const dayOfTheWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    return {
      activityData,
      dayOfTheWeek,
    };
  }
}

function performanceData(data) {
  if (data[3]) {
    const performanceData = data[3].data.data;
    const performanceDataFormated = performanceData.data.map((item) => {
      let newKindIndex = item.kind - 1;
      return {
        subject: motEnFrancais[newKindIndex],
        value: item.value,
      };
    });

    const [first, second, ...rest] = performanceDataFormated;
    const newDisplayForKind = [...rest, first, second];
    return newDisplayForKind;
  }
}

const motEnFrancais = [
  'Cardio',
  'Energie',
  'Endurance',
  'Force',
  'Vitesse',
  'Intensité',
];

export { mainUserData, sessionData, activityData, performanceData };
