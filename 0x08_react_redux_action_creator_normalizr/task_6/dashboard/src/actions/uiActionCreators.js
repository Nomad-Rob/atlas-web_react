import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export function login(email, password) {
  return { type: LOGIN, user: { email, password } };
}

export function loginSuccess(userData) {
  return { type: LOGIN_SUCCESS, userData };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, error };
}

export function loginRequest(email, password) {
  return function(dispatch) {
    dispatch(login(email, password));
    return fetch('/login-success.json')
      .then(response => response.json())
      .then(json => dispatch(loginSuccess(json)))
      .catch(error => dispatch(loginFailure(error)));
  };
}
