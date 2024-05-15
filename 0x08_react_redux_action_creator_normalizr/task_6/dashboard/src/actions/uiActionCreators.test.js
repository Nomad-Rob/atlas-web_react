import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async loginRequest action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when the login API succeeds', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { user: { id: 1, name: 'John Doe' } },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'user@example.com', password: 'password123' }},
      { type: LOGIN_SUCCESS, userData: { user: { id: 1, name: 'John Doe' }}}
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('user@example.com', 'password123'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('dispatches LOGIN and LOGIN_FAILURE when the login API fails', () => {
    fetchMock.getOnce('/login-success.json', {
      throws: new Error('API failure')
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'user@example.com', password: 'password123' }},
      { type: LOGIN_FAILURE, error: new Error('API failure')}
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('user@example.com', 'password123'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[1].type).toEqual(LOGIN_FAILURE);
        expect(actions[1].error).toEqual(expect.any(Error));
      });
  });
});
