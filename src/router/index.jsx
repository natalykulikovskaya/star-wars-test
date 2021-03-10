import React, { memo } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Planets from '../pages/Planets';
import PlanetInfo from '../pages/PlanetInfo';
import Films from '../pages/Films';
import Residents from '../pages/Residents';
import ROUTES from './constants';

const AppRouter = () => (
  <Switch>
    <Route exact path={ROUTES.home} component={Planets} />
    <Route exact path={`${ROUTES.planetInfo}/:id`} component={PlanetInfo} />
    <Route exact path={`${ROUTES.films}/:id`} component={Films} />
    <Route exact path={`${ROUTES.residents}/:id`} component={Residents} />
  </Switch>
);

export default memo(AppRouter);
