import { data } from '../mockedData.js';

export function getDataMocked(userId) {
  const userID = Number(userId);
  const id = data[0].data.data.id;
  console.log(userId == id);
  if (userID === id) {
    return data;
  }
}
export default getDataMocked;
