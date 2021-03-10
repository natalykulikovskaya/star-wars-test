import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  CircularProgress,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { REIDENTS_HEADERS } from '../../utils/constants';
import ActionTypes from '../../store/actions/residents';
import BackButton from '../../components/BackButton';
import ROUTES from '../../router/constants';
import Table from '../../components/Table';
import addTypeToHeaders from '../../utils/addTypeToHeaders';

const Residents = ({ match }) => {
  const dispatch = useDispatch();
  const residents = useSelector((state) => state.residents.residents);
  const isLoading = useSelector((state) => state.residents.isLoading);
  const parsedHeaders = addTypeToHeaders(residents, REIDENTS_HEADERS);

  useEffect(() => {
    const { params: { id } } = match;
    dispatch(ActionTypes.fetchResidentsRequest({ id }));
  }, []);

  return (
    <Box p={5}>
      <BackButton path={ROUTES.home} />
      <h1>Star Wars Residents</h1>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Table
          tableHeaders={parsedHeaders}
          tableRows={residents}
        />
      )}
    </Box>
  );
};

export default memo(Residents);

Residents.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
