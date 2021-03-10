import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';

import FilmActions from '../../actions/residents';
import ActionTypes from '../../types/residents';
import { fetchPlanetInfo } from '../../../api/planets';
import fetchResidents from '../../../api/residents';

function* fetchResidentsRequestSaga({ payload }) {
  try {
    const { residents } = yield call(fetchPlanetInfo, payload);
    const result = yield call(fetchResidents, residents);
    yield put(FilmActions.fetchResidentsSuccess(result));
  } catch (error) {
    yield put(FilmActions.fetchResidentsError('Fetch planets error'));
  }
}

function* watch() {
  yield takeLatest(ActionTypes.FETCH_RESIDENTS_REQUEST, fetchResidentsRequestSaga);
}

export default watch;
