import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, CircularProgress } from '@material-ui/core';

import Form from './Form';
import Table from '../../components/Table';
import ActionTypes from '../../store/actions/planets';
import { PLANET_HEADERS } from '../../utils/constants';
import ROUTES from '../../router/constants';
import { parsePlanetsData } from '../../utils/parsePlanetInfo';
import addTypeToHeaders from '../../utils/addTypeToHeaders';

const NEXT_PAGE = 1;
const PREV_PAGE = -1;

const Planets = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets.results || []);
  const planetsAmount = useSelector((state) => state.planets.totalPlanets);
  const currentPage = useSelector((state) => state.planets.page);
  const isLoading = useSelector((state) => state.planets.isLoading);
  const isPlanetLoading = useSelector((state) => state.planets.isPlanetLoading);
  const history = useHistory();
  const [formState, setFormState] = useState(false);
  const parsedHeaders = addTypeToHeaders(planets, PLANET_HEADERS);

  const changePage = (value) => () => {
    dispatch(ActionTypes.fetchPlanetsRequest({
      page: currentPage + value,
    }));
  };
  const handleClose = () => setFormState(false);
  const handleOpen = () => setFormState(true);

  const updatePlanetData = () => {
    dispatch(ActionTypes.updatePlanetInfoRequest());
    if (!isPlanetLoading) {
      handleClose();
    }
  };

  const actions = [
    {
      id: '1',
      type: 'go_to',
      label: 'Go to Films',
      onClick: ({ id }) => history.push(`${ROUTES.films}/${id}`),
    },
    {
      id: '2',
      type: 'go_to',
      label: 'Go to Residents',
      onClick: ({ id }) => history.push(`${ROUTES.residents}/${id}`),
    },
    {
      id: '3',
      type: 'go_to',
      label: 'See more',
      onClick: ({ id }) => history.push(`${ROUTES.planetInfo}/${id}`),
    },
    {
      id: '4',
      type: 'go_to',
      label: 'Open form',
      onClick: ({ id }) => {
        dispatch(ActionTypes.fetchPlanetInfoRequest({ id }));
        handleOpen();
      },
    },
  ];

  useEffect(() => {
    dispatch(ActionTypes.fetchPlanetsRequest({ page: currentPage }));
  }, []);

  return (
    <Box p={5}>
      <h1>Star Wars Planets</h1>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Table
          tableHeaders={parsedHeaders}
          tableRows={parsePlanetsData(planets)}
          actions={actions}
          length={planetsAmount}
          currentPage={currentPage}
          changePage={changePage(NEXT_PAGE)}
          increasePage={changePage(NEXT_PAGE)}
          reducePage={changePage(PREV_PAGE)}
          pagination
        />
      )}
      <Form
        open={formState}
        handleClose={handleClose}
        handleClick={updatePlanetData}
      />
    </Box>
  );
};

export default memo(Planets);
