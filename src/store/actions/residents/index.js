import ActionTypes from '../../types/residents';

export default {
  fetchResidentsRequest: (payload) => ({
    type: ActionTypes.FETCH_RESIDENTS_REQUEST,
    payload,
  }),

  fetchResidentsSuccess: (payload) => ({
    type: ActionTypes.FETCH_RESIDENTS_SUCCESS,
    payload,
  }),

  fetchResidentsError: (payload) => ({
    type: ActionTypes.FETCH_RESIDENTS_ERROR,
    payload,
  }),
};
