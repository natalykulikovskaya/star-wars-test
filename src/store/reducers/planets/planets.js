import INITIAL_STATE from './initialState';
import ActionTypes from '../../types/planets';

const planetsReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.FETCH_PLANETS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload.results,
        totalPlanets: action.payload.count,
        page: action.payload.page,
        errorMessage: action.payload,
      };
    case ActionTypes.FETCH_PLANETS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.FETCH_PLANET_INFO_REQUEST:
      return {
        ...state,
        isPlanetLoading: true,
      };
    case ActionTypes.FETCH_PLANET_INFO_SUCCESS:
      return {
        ...state,
        isPlanetLoading: false,
        currentPlanet: action.payload,
      };
    case ActionTypes.FETCH_PLANET_INFO_ERROR:
      return {
        ...state,
        isPlanetLoading: false,
        errorMessage: action.payload,
      };
    case ActionTypes.UPDATE_PLANET_INFO_REQUEST:
      return {
        ...state,
        isPlanetLoading: true,
      };
    case ActionTypes.UPDATE_PLANET_INFO_SUCCESS:
      return {
        ...state,
        isPlanetLoading: false,
      };
    case ActionTypes.UPDATE_PLANET_INFO_ERROR:
      return {
        ...state,
        isPlanetLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default planetsReducer;
