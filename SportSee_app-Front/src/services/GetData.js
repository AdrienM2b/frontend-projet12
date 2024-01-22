import axios from 'axios';
// import { data } from '../mockedData.js';

// export function getDataMocked(userId) {
//   const userID = Number(userId);
//   const id = data[0].data.data.id;
//   console.log(userId == id);
//   if (userID === id) {
//     return data;
//   }
// }
// export default getDataMocked;

export async function getData(userId) {
  let URL1 = `http://localhost:3000/user/${userId}`;
  let URL2 = `http://localhost:3000/user/${userId}/activity`;
  let URL3 = `http://localhost:3000/user/${userId}/average-sessions`;
  let URL4 = `http://localhost:3000/user/${userId}/performance`;

  const fetchURL = (url) => axios.get(url);

  const promiseArray = [URL1, URL2, URL3, URL4].map(fetchURL);

  return await Promise.all(promiseArray)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      err;
    });
}

export default getData;
