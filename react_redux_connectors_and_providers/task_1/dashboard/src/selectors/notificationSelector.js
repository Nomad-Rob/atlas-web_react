import { createSelector } from 'reselect';

// Selector to get the filter type from the state
export const filterTypeSelected = (state) => state.getIn(['notificationReducer', 'filter']);

// Selector to get all notifications
export const getNotifications = (state) => state.getIn(['notificationReducer', 'entities', 'notifications']);

// Selector to get unread notificationss
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter(notif => !notif.get('isRead'))
);
