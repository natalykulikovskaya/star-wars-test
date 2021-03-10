import ActionTypes from '../../types/planets';

export default {
  // Get list with all planets
  fetchPlanetsRequest: (payload) => ({
    type: ActionTypes.FETCH_PLANETS_REQUEST,
    payload,
  }),

  fetchPlanetsSuccess: (payload) => ({
    type: ActionTypes.FETCH_PLANETS_SUCCESS,
    payload,
  }),

  fetchPlanetsError: (payload) => ({
    type: ActionTypes.FETCH_PLANETS_ERROR,
    payload,
  }),

  // Get planet info by id
  fetchPlanetInfoRequest: (payload) => ({
    type: ActionTypes.FETCH_PLANET_INFO_REQUEST,
    payload,
  }),

  fetchPlanetInfoSuccess: (payload) => ({
    type: ActionTypes.FETCH_PLANET_INFO_SUCCESS,
    payload,
  }),

  fetchPlanetInfoError: (payload) => ({
    type: ActionTypes.FETCH_PLANET_INFO_ERROR,
    payload,
  }),

  // Update planet
  updatePlanetInfoRequest: () => ({
    type: ActionTypes.UPDATE_PLANET_INFO_REQUEST,
  }),

  updatePlanetInfoSuccess: () => ({
    type: ActionTypes.UPDATE_PLANET_INFO_SUCCESS,
  }),

  updatePlanetInfoError: (payload) => ({
    type: ActionTypes.UPDATE_PLANET_INFO_ERROR,
    payload,
  }),
};
