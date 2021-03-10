import React, { memo, useMemo } from 'react';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons';
import {
  IconButton,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const DEFAULT_LIMIT = 10;

const Pagination = ({
  handleBackButtonClick,
  handleNextButtonClick,
  totalItems,
  page,
}) => {
  const totalPages = totalItems / DEFAULT_LIMIT;
  const disabledPrevBtn = useMemo(() => page === 1, [page]);
  const disabledNextBtn = useMemo(() => (totalPages === page), [totalPages]);

  return (
    <div>
      <span>
        {page}
      </span>
      <IconButton onClick={handleNextButtonClick} disabled={disabledPrevBtn}>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={disabledNextBtn}>
        <KeyboardArrowRight />
      </IconButton>
    </div>
  );
};

export default memo(Pagination);

Pagination.propTypes = {
  handleBackButtonClick: PropTypes.func.isRequired,
  handleNextButtonClick: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};
