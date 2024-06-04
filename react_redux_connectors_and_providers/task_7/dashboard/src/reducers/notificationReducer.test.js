import { fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

describe('notificationReducer', () => {
  const initialState = fromJS({
    entities: {},
    ids: [],
    filter: 'DEFAULT',
    loading: false
  });

  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const rawData = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" }
    ];
    const normalizedData = notificationsNormalizer(rawData);
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: rawData
    };
    expect(notificationReducer(initialState, action)).toEqual(fromJS({
      entities: normalizedData.entities.notifications,
      ids: normalizedData.result,
      filter: 'DEFAULT',
      loading: false
    }));
  });

  it('should handle MARK_AS_READ', () => {
    const state = fromJS({
      entities: {
        '2': { id: 2, type: "urgent", value: "New resume available", isRead: false }
      },
      ids: [2],
      filter: 'DEFAULT',
      loading: false
    });
    const action = {
      type: MARK_AS_READ,
      index: 2
    };
    expect(notificationReducer(state, action).getIn(['entities', '2', 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };
    expect(notificationReducer(initialState, action).get('filter')).toBe('URGENT');
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = {
      type: SET_LOADING_STATE,
      isLoading: true
    };
    expect(notificationReducer(initialState, action).get('loading')).toBe(true);
  });
});
