import axios from 'axios';

import ENDPOINT from '../constants';

const FETCH_PLANETS = `${ENDPOINT}/planets`;
export const fetchPlanets = async ({ page }) => {
  try {
    const params = {
      page,
    };
    const { data } = await axios.get(FETCH_PLANETS, { params });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchPlanetInfo = async ({ id }) => {
  try {
    const { data } = await axios.get(`${FETCH_PLANETS}/${id}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
