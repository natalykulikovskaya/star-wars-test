import INITIAL_STATE from './initialState';
import ActionTypes from '../../types/films';

const planetsReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.FETCH_FILMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_FILMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        films: action.payload,
      };
    case ActionTypes.FETCH_FILMS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default planetsReducer;
