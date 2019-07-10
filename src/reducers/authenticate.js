/* @flow */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  RESTORE_REQUEST,
  RESTORE_FAILED
} from "../config/redux-events";

const initialState = {
  isAuth: false,
  requestingAuth: false,
  authSession: null,
  authError: "",
  requestingRestore: true
};

export default function authenticate(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        authError: "",
        requestingAuth: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        authSession: action.data.session,
        requestingRestore: false,
        requestingAuth: false
      };
    case LOGIN_FAILED:
      return {
        ...state,
        requestingAuth: false,
        authError: action.data.error
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        requestingAuth: false,
        authSession: null,
        authError: ""
      };
    case RESTORE_REQUEST:
      return {
        ...state,
        requestingRestore: true
      };
    case RESTORE_FAILED:
      return {
        ...state,
        requestingRestore: false
      };
    default:
      return state;
  }
}
