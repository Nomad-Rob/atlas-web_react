import uiReducer from './uiReducer';
import { LOGIN, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isUserLoggedIn: false,
    user: null
  });

  it('should handle LOGIN action', () => {
    const user = { email: 'test@example.com' };
    const action = { type: LOGIN, user };
    const expectedState = initialState.set('isUserLoggedIn', true).set('user', user);
    expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle LOGOUT action', () => {
    const loggedInState = initialState.set('isUserLoggedIn', true).set('user', { email: 'test@example.com' });
    const action = { type: LOGOUT };
    const expectedState = initialState.set('isUserLoggedIn', false).set('user', null);
    expect(uiReducer(loggedInState, action).toJS()).toEqual(expectedState.toJS());
  });
});
