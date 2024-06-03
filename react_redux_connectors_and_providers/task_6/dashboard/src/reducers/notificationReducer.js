import { fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

// Improved initial state to include a loading flag
const initialState = fromJS({
  entities: {},
  ids: [],
  filter: 'DEFAULT',
  loading: false
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      // Update the loading state based on the action's payload
      return state.set('loading', action.isLoading);

    case FETCH_NOTIFICATIONS_SUCCESS:
      // Use notificationsNormalizer to normalize data and merge deeply into state
      const normalized = notificationsNormalizer(action.data);
      return state.mergeDeep({
        entities: normalized.entities.notifications,
        ids: normalized.result
      });

    case MARK_AS_READ:
      // Set 'isRead' to true for a specific notification, assuming 'index' is the id of the notification
      return state.setIn(['entities', action.index, 'isRead'], true);

    case SET_TYPE_FILTER:
      // Set the filter for displaying notifications
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;
