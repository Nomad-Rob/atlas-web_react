import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('UI Action Creators', () => {
  it('login should create an action to log in', () => {
    const email = "example@example.com";
    const password = "123456";
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedState);
  });

  it('logout should create an action to log out', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedState);
  });

  it('displayNotificationDrawer should create an action to display the notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedState);
  });

  it('hideNotificationDrawer should create an action to hide the notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedState);
  });
});
