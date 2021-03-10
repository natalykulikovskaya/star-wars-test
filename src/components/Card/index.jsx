import React, { memo } from 'react';
import {
  Paper,
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Card = ({ headers, data }) => (
  <Paper>
    <Box p={5}>
      <Grid container m={5}>
        {headers.map((item) => (
          <Grid key={item.key} container className={styles.listItem}>
            <Grid xs={6} item>
              <Typography variant="h5">{item.name}</Typography>
            </Grid>
            <Grid xs={6} item>
              <Typography variant="h5">{data[item.key]}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Paper>
);

export default memo(Card);

Card.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      key: PropTypes.string,
    }),
  ).isRequired,
  data: PropTypes.shape({}, true).isRequired,
};
