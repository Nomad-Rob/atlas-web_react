import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const initialState = fromJS({
    notificationReducer: {
      filter: 'DEFAULT',
      entities: {
        notifications: {
          '1': { id: 1, isRead: false, message: 'Notification 1' },
          '2': { id: 2, isRead: true, message: 'Notification 2' },
          '3': { id: 3, isRead: false, message: 'Notification 3' }
        }
      }
    }
  });

  it('filterTypeSelected should return the filter type', () => {
    expect(filterTypeSelected(initialState)).toEqual('DEFAULT');
  });

  it('getNotifications should return all notifications', () => {
    expect(getNotifications(initialState).toJS()).toEqual({
      '1': { id: 1, isRead: false, message: 'Notification 1' },
      '2': { id: 2, isRead: true, message: 'Notification 2' },
      '3': { id: 3, isRead: false, message: 'Notification 3' }
    });
  });

  it('getUnreadNotifications should return unread notifications', () => {
    expect(getUnreadNotifications(initialState).toJS()).toEqual({
      '1': { id: 1, isRead: false, message: 'Notification 1' },
      '3': { id: 3, isRead: false, message: 'Notification 3' }
    });
  });
});
