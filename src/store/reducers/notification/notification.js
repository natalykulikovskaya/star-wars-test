import INITIAL_STATE from './initialState';
import ActionTypes from '../../types/notification';

const planetsReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        isOpen: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case ActionTypes.CLOSE_NOTIFICATION:
      return {
        ...state,
        isOpen: false,
        message: null,
        type: 'info',
      };
    default:
      return state;
  }
};

export default planetsReducer;
