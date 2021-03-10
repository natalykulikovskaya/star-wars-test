import axios from 'axios';

export default async (residents) => {
  try {
    if (residents.length === 0) {
      return [];
    }

    const promiseArray = residents.map((url) => axios.get(url));

    const result = (
      await Promise.all(promiseArray)
    ).map((res) => res.data);

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
