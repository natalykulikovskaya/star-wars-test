import React, { memo } from 'react';
import {
  TableBody,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './Table.module.scss';
import Button from '../ActionButton';
import Pagination from '../Pagination';

const BaseTable = ({
  tableHeaders,
  tableRows,
  actions,
  length,
  currentPage = 1,
  increasePage,
  reducePage,
  pagination,
}) => (
  <Paper className={styles.container}>
    {Boolean(tableRows.length) && (
      <>
        <TableContainer>
          <Table>
            <TableHead className={styles.header}>
              <TableRow>
                {tableHeaders.map((item) => (
                  <TableCell
                    className={styles.title}
                    size="small"
                    variant="head"
                    align={item.isNumber ? 'right' : 'center'}
                    key={item.key}
                  >
                    {item.name}
                  </TableCell>
                ))}
                {Boolean(actions.length) && (
                <TableCell className={styles.title} variant="head" align="center">Actions</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((item) => (
                <TableRow key={Math.random()}>
                  {tableHeaders.map(({ key, isNumber }) => (
                    <TableCell className={styles.cell} align={isNumber ? 'right' : 'center'} key={key}>
                      {item[key]}
                    </TableCell>
                  ))}
                  {Boolean(actions.length) && (
                  <TableCell align="center">
                    {actions.map((action) => (
                      <Button
                        onClick={() => action.onClick(item)}
                        text={action.label}
                        variant="outlined"
                        size="small"
                        color="primary"
                        key={action.id}
                      />
                    ))}
                  </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {pagination && (
        <Pagination
          handleBackButtonClick={increasePage}
          handleNextButtonClick={reducePage}
          totalItems={length}
          page={currentPage}
        />
        )}
      </>
    )}
    {!tableRows.length && (
      <Box p={5}>
        <h1>NO DATA</h1>
      </Box>
    )}
  </Paper>
);

export default memo(BaseTable);

BaseTable.propTypes = {
  tableHeaders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      key: PropTypes.string,
    }),
  ).isRequired,
  tableRows: PropTypes.arrayOf(
    PropTypes.shape({}, true),
  ).isRequired,
  actions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    action: PropTypes.func,
  })),
  currentPage: PropTypes.number,
  length: PropTypes.number,
  increasePage: PropTypes.func,
  reducePage: PropTypes.func,
  pagination: PropTypes.bool,
};

BaseTable.defaultProps = {
  actions: [],
  pagination: false,
  currentPage: 1,
  length: 0,
  increasePage: () => {},
  reducePage: () => {},
};
