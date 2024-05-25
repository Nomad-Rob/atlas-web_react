import { fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = fromJS({
  entities: {},
  ids: [],
  filter: 'DEFAULT'
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalized = notificationsNormalizer(action.data);
      return state.merge({
        entities: normalized.entities.notifications,
        ids: normalized.result
      });

    case MARK_AS_READ:
      return state.setIn(['entities', action.index, 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;
