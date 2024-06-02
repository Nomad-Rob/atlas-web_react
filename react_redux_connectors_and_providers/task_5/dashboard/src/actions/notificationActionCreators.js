import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// Action creator for marking a notification as read
export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index
  };
}

// Action creator for setting the type filter of notifications
export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}

// Action creator for setting the loading state
export function setLoadingState(isLoading) {
  return {
    type: SET_LOADING_STATE,
    isLoading
  };
}

// Action creator for setting the notifications after successful fetch
export function setNotifications(data) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  };
}

// Thunk action creator for fetching notifications
export function fetchNotifications() {
  return function(dispatch) {
    dispatch(setLoadingState(true)); // Set loading state to true before fetching data
    return fetch('/notifications.json') // Specify the correct path to your notifications data
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        dispatch(setNotifications(data)); // Dispatch the fetched notifications
        dispatch(setLoadingState(false)); // Set loading state to false after fetching
      })
      .catch(error => {
        console.error('Failed to fetch notifications:', error);
        dispatch(setLoadingState(false)); // Ensure loading state is set to false on error
      });
  };
}
