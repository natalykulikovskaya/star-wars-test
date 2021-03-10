import ActionTypes from '../../types/notification';

export default {
  showNotification: (payload) => ({
    type: ActionTypes.SHOW_NOTIFICATION,
    payload,
  }),

  hideNotification: (payload) => ({
    type: ActionTypes.CLOSE_NOTIFICATION,
    payload,
  }),
};
