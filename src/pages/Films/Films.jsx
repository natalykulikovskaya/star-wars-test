import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  CircularProgress,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { FILMS_HEADERS } from '../../utils/constants';
import FilmsActionTypes from '../../store/actions/films';
import BackButton from '../../components/BackButton';
import ROUTES from '../../router/constants';
import Table from '../../components/Table';
import addTypeToHeaders from '../../utils/addTypeToHeaders';

const Films = ({ match }) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.films);
  const isLoading = useSelector((state) => state.films.isLoading);
  const parsedHeaders = addTypeToHeaders(films, FILMS_HEADERS);

  useEffect(() => {
    const { params: { id } } = match;
    dispatch(FilmsActionTypes.fetchFilmsRequest({ id }));
  }, []);

  return (
    <Box p={5}>
      <BackButton path={ROUTES.home} />
      <h1>Star Wars Films</h1>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Table
          tableHeaders={parsedHeaders}
          tableRows={films}
        />
      )}
    </Box>
  );
};

export default memo(Films);

Films.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
