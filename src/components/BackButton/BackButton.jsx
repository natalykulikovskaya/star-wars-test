import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowBack } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const BackButton = ({ path }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(path);
  };

  return (
    <Button onClick={onClick} startIcon={<ArrowBack />}>
      {' '}
      Go Back
    </Button>
  );
};
export default memo(BackButton);

BackButton.propTypes = {
  path: PropTypes.string.isRequired,
};
