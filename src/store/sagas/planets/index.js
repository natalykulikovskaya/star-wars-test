import {
  put,
  takeLatest,
  call,
  delay,
} from 'redux-saga/effects';

import PlanetActions from '../../actions/planets';
import ActionTypes from '../../types/planets';
import NotificationActions from '../../actions/notification';
import { fetchPlanets, fetchPlanetInfo } from '../../../api/planets';

function* fetchPlanetsRequestSaga({ payload }) {
  try {
    const result = yield call(fetchPlanets, payload);
    yield put(PlanetActions.fetchPlanetsSuccess({ ...result, page: payload.page }));
  } catch (error) {
    yield put(PlanetActions.fetchPlanetInfoError('Fetch planets error'));
  }
}

function* fetchPlanetInfoRequestSaga({ payload }) {
  try {
    const result = yield call(fetchPlanetInfo, payload);
    yield put(PlanetActions.fetchPlanetInfoSuccess(result));
  } catch (error) {
    yield put(PlanetActions.fetchPlanetInfoError('Fetch planet info error'));
  }
}

function* updatePlanetInfoRequestSaga() {
  try {
    yield delay(1000);
    yield put(PlanetActions.updatePlanetInfoSuccess());
    const data = {
      message: 'Success',
      type: 'success',
    };
    yield put(NotificationActions.showNotification(data));
    yield delay(3000);
    yield put(NotificationActions.hideNotification());
  } catch (error) {
    yield put(PlanetActions.updatePlanetInfoError('Update planet info error'));
  }
}

function* watch() {
  yield takeLatest(ActionTypes.FETCH_PLANETS_REQUEST, fetchPlanetsRequestSaga);
  yield takeLatest(ActionTypes.FETCH_PLANET_INFO_REQUEST, fetchPlanetInfoRequestSaga);
  yield takeLatest(ActionTypes.UPDATE_PLANET_INFO_REQUEST, updatePlanetInfoRequestSaga);
}

export default watch;
