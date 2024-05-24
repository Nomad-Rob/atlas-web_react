import uiReducer from './uiReducer';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  logout
} from '../actions/uiActions';

// Initial state used by the reducer
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when a non-defined action is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const newState = uiReducer(initialState, displayNotificationDrawer());
    expect(newState).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const startState = { ...initialState, isNotificationDrawerVisible: true };
    const newState = uiReducer(startState, hideNotificationDrawer());
    expect(newState).toEqual(initialState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const newState = uiReducer(initialState, loginSuccess());
    expect(newState).toEqual({
      ...initialState,
      isUserLoggedIn: true
    });
  });

  it('should handle LOGIN_FAILURE and LOGOUT', () => {
    const loggedInState = { ...initialState, isUserLoggedIn: true };
    const failedState = uiReducer(loggedInState, loginFailure());
    const loggedOutState = uiReducer(loggedInState, logout());

    expect(failedState).toEqual(initialState);
    expect(loggedOutState).toEqual(initialState);
  });
});
