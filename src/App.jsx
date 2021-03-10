import React, { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Notification from './components/Notification';

import Routes from './router';

const storeState = configureStore({});

const App = () => (
  <Provider store={storeState}>
    <Router>
      <Routes />
      <Notification />
    </Router>
  </Provider>

);

export default memo(App);
