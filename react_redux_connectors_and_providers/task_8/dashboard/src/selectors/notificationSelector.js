import { createSelector } from 'reselect';

// Selector to get the filter type from the state
export const filterTypeSelected = (state) => state.getIn(['notificationReducer', 'filter']);

// Selector to get all notifications
export const getNotifications = (state) => state.getIn(['notificationReducer', 'entities', 'notifications']);

// New selector to get unread notifications by type
export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelected, getNotifications],
  (filterType, notifications) => {
    if (filterType === 'default') {
      return notifications.filter(notif => !notif.get('isRead'));
    } else if (filterType === 'urgent') {
      return notifications.filter(notif => !notif.get('isRead') && notif.get('type') === 'urgent');
    }
    return notifications.filter(notif => !notif.get('isRead'));
  }
);
