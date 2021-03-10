import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';

import FilmActions from '../../actions/films';
import ActionTypes from '../../types/films';
import { fetchPlanetInfo } from '../../../api/planets';
import fetchFilms from '../../../api/films';

function* fetchFilmsRequestSaga({ payload }) {
  try {
    const { films } = yield call(fetchPlanetInfo, payload);
    const result = yield call(fetchFilms, films);
    yield put(FilmActions.fetchFilmsSuccess(result));
  } catch (error) {
    yield put(FilmActions.fetchFilmsError('Fetch planets error'));
  }
}

function* watch() {
  yield takeLatest(ActionTypes.FETCH_FILMS_REQUEST, fetchFilmsRequestSaga);
}

export default watch;
