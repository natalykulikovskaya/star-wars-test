import { combineReducers } from 'redux';

import planets from './planets';
import films from './films';
import residents from './residents';
import notification from './notification';

const createRootReducer = () => combineReducers({
  planets,
  films,
  residents,
  notification,
});

export default createRootReducer;
