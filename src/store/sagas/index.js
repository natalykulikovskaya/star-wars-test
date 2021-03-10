import { all } from 'redux-saga/effects';

import planets from './planets';
import films from './films';
import residents from './residents';

export default function* rootSaga() {
  yield all([
    planets(),
    films(),
    residents(),
  ]);
}
