import { Dispatch } from "redux";

import * as actionTypes from "./types";

export function authStart() {
  return {
    type: actionTypes.AUTH_START,
  };
}

export function authFail() {
  return {
    error: "Authentication failed!",
    type: actionTypes.AUTH_FAIL,
  };
}

export function loginSuccess() {
  return {
    type: actionTypes.LOGIN_SUCCESS,
  };
}

export function logoutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
}

export function login() {

  return function action(dispatch: Dispatch) {
    dispatch(authStart());
    Promise.resolve()
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(authFail()));
  };
}

export function logout() {
  return function action(dispatch: Dispatch) {
    // erase session associated local storage
    dispatch(logoutSuccess());
  };
}
