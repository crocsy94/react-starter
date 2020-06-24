import { AnyAction } from "redux";

import * as actionTypes from "../actions/types";

export interface IState {
  visitorNumber: number;
}

export const initialState: IState = {
  visitorNumber: 0,
};

export const reducer = (state: IState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.INCREASE_VISITOR:
      return {
        ...state,
        visitorNumber: state.visitorNumber + 1,
      };
    case actionTypes.DECREASE_VISITOR:
      return {
        ...state,
        visitorNumber: state.visitorNumber - 1,
      };
    default:
      return state;
  }
};
