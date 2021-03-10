import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Box,
} from '@material-ui/core';

import styles from './ActionButton.module.scss';

const ActionButton = ({
  onClick,
  text,
  ...rest
}) => (
  <Box mt={1}>
    <Button className={styles.button} onClick={onClick} {...rest}>
      {text}
    </Button>
  </Box>
);

export default memo(ActionButton);

ActionButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

ActionButton.defaultProps = {
  onClick: () => {},
};
