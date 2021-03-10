import axios from 'axios';

export default async (films) => {
  try {
    if (films.length === 0) {
      return [];
    }

    const promiseArray = films.map((url) => axios.get(url));

    const result = (
      await Promise.all(promiseArray)
    ).map((res) => res.data);

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
