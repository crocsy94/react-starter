
import { AnyAction } from "redux";

import * as actionTypes from "../actions/types";

export interface IState {
  authError: string;
  authInProgress: boolean;
  isAuthenticated: boolean;
}

export const initialState: IState = {
  authError: null,
  authInProgress: false,
  isAuthenticated: false,
};

export const reducer = (state: IState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        authError: initialState.authError,
        authInProgress: true,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        authError: action.error,
        authInProgress: false,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authInProgress: false,
        isAuthenticated: true,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        authInProgress: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
