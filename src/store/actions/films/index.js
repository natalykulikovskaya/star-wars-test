import ActionTypes from '../../types/films';

export default {
  fetchFilmsRequest: (payload) => ({
    type: ActionTypes.FETCH_FILMS_REQUEST,
    payload,
  }),

  fetchFilmsSuccess: (payload) => ({
    type: ActionTypes.FETCH_FILMS_SUCCESS,
    payload,
  }),

  fetchFilmsError: (payload) => ({
    type: ActionTypes.FETCH_FILMS_ERROR,
    payload,
  }),
};
