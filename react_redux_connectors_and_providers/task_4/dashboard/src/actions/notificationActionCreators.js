import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export function markAsRead(index) {
  return function(dispatch) {
    dispatch({
      type: MARK_AS_READ,
      index
    });
  };
}

export function setNotificationFilter(filter) {
  return function(dispatch) {
    dispatch({
      type: SET_TYPE_FILTER,
      filter
    });
  };
}
