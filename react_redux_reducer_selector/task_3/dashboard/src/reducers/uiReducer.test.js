import uiReducer from './uiReducer';
import { Map } from 'immutable';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  logout
} from '../actions/uiActions';

describe('uiReducer with Immutable', () => {
  // Convert Immutable Map to JS object for comparison
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  });

  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when a non-defined action is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' }).toJS()).toEqual(initialState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(uiReducer(initialState, displayNotificationDrawer()).toJS()).toEqual(
      initialState.set('isNotificationDrawerVisible', true).toJS()
    );
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const startState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(startState, hideNotificationDrawer()).toJS()).toEqual(initialState.toJS());
  });

  it('should maintain other state properties when toggling the notification drawer', () => {
    const modifiedState = initialState.set('user', { name: 'John Doe' });
    const newState = uiReducer(modifiedState, displayNotificationDrawer());
    expect(newState.get('user')).toEqual({ name: 'John Doe' });
  });

  it('should maintain other state properties during login/logout actions', () => {
    const modifiedState = initialState.set('isNotificationDrawerVisible', true);
    const newStateAfterLogin = uiReducer(modifiedState, loginSuccess());
    expect(newStateAfterLogin.get('isNotificationDrawerVisible')).toBe(true);

    const newStateAfterLogout = uiReducer(newStateAfterLogin, logout());
    expect(newStateAfterLogout.get('isNotificationDrawerVisible')).toBe(true);
  });
});
