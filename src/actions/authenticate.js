/* @flow */

import { DATA_SESSION } from "../config/values";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  RESTORE_REQUEST,
  RESTORE_FAILED
} from "../config/redux-events";

export function login(username, password) {
  return dispatch => {
    dispatch(loginRequest());

    setTimeout(() => {
      if (username.toLowerCase() === "test" && password === "test") {
        const session = {
          token: "abcd1234",
          username,
          email: "test@nomail.com"
        };

        localStorage.setItem(DATA_SESSION, JSON.stringify(session));
        dispatch(loginSuccess(session));
      } else {
        dispatch(loginFailed("Authentication Failed"));
      }
    }, 2000);
  };
} // login

export function restoreSession(callback) {
  return dispatch => {
    dispatch(restoreRequest());

    const session = localStorage.getItem(DATA_SESSION);
    setTimeout(() => {
      if (session != null) {
        if (callback) {
          dispatch(callback);
        }
        dispatch(loginSuccess(JSON.parse(session)));
      } else {
        dispatch(restoreFailed());
      }
    }, 1000);
  };
} // restoreSession

export function logout() {
  localStorage.removeItem(DATA_SESSION);
  return { type: LOGOUT_SUCCESS };
} // logout

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
} //loginRequest

function loginSuccess(session) {
  return {
    type: LOGIN_SUCCESS,
    data: {
      session
    }
  };
} // loginSuccess

function loginFailed(error) {
  if (!error) {
    error = "Network Error";
  }
  return {
    type: LOGIN_FAILED,
    data: {
      error: error
    }
  };
} // loginFailed

function restoreRequest() {
  return {
    type: RESTORE_REQUEST
  };
} //restoreRequest

function restoreFailed() {
  return {
    type: RESTORE_FAILED
  };
} //restoreFailed
