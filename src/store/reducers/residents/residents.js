import INITIAL_STATE from './initialState';
import ActionTypes from '../../types/residents';

const planetsReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.FETCH_RESIDENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_RESIDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        residents: action.payload,
      };
    case ActionTypes.FETCH_RESIDENTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default planetsReducer;
