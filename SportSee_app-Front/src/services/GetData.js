import axios from 'axios';

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
