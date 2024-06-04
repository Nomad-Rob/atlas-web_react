import { setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

describe('Notification Action Creators', () => {
  it('setLoadingState creates an action to set loading state', () => {
    const isLoading = true;
    const expectedAction = {
      type: SET_LOADING_STATE,
      isLoading
    };
    expect(setLoadingState(isLoading)).toEqual(expectedAction);
  });

  it('setNotifications creates an action to set notifications', () => {
    const data = [{ id: 1, type: 'default', value: 'New course available' }];
    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data
    };
    expect(setNotifications(data)).toEqual(expectedAction);
  });

  it('fetchNotifications dispatches the correct actions', () => {
    const mockDispatch = jest.fn();
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, type: 'default', value: 'New course available' }])
      })
    );
    global.fetch = mockFetch;

    const thunk = fetchNotifications();
    return thunk(mockDispatch).then(() => {
      expect(mockDispatch).toHaveBeenCalledWith(setLoadingState(true));
      expect(mockDispatch).toHaveBeenCalledWith(
        setNotifications([{ id: 1, type: 'default', value: 'New course available' }])
      );
      expect(mockDispatch).toHaveBeenCalledWith(setLoadingState(false));
    });
  });
});
