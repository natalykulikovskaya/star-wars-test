import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Paper,
  Box,
  Typography,
  Divider,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { PLANET_HEADERS } from '../../utils/constants';
import ActionTypes from '../../store/actions/planets';
import BackButton from '../../components/BackButton';
import ROUTES from '../../router/constants';
import background from '../../assets/background.jpg';
import styles from './PlanetInfo.module.scss';
import Card from '../../components/Card';
import { parsePlanetInfo } from '../../utils/parsePlanetInfo';

const PlanetInfo = ({ match }) => {
  const dispatch = useDispatch();
  const planetInfo = useSelector((state) => state.planets.currentPlanet);

  useEffect(() => {
    const { params: { id } } = match;
    dispatch(ActionTypes.fetchPlanetInfoRequest({ id }));
  }, []);

  return (
    <Container>
      <BackButton path={ROUTES.home} />
      <Box mt={5}>
        <Paper>
          <img className={styles.background} src={background} alt="" />
          <Box p={5}>
            <Typography variant="h1" component="h2">{planetInfo.name}</Typography>
            <Divider />
            <Card headers={PLANET_HEADERS} data={parsePlanetInfo(planetInfo)} />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default memo(PlanetInfo);

PlanetInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
