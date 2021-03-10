import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Actions from '../../store/actions/notification';

const Notification = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.notification.isOpen);
  const type = useSelector((state) => state.notification.type);
  const message = useSelector((state) => state.notification.message);

  const handleClose = () => {
    dispatch(Actions.hideNotification());
  };

  return (
    <Snackbar open={isOpen} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default memo(Notification);
