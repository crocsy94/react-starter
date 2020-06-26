import { AnyAction } from "redux";

import * as actionTypes from "../actions/types";

export interface IState {
  colorId: number;
  visitorNumber: number;
}

export const initialState: IState = {
  colorId: 0,
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
    case actionTypes.CHANGE_COLOR:
      return {
        ...state,
        colorId: Math.floor(Math.random() * 5),
      };
    default:
      return state;
  }
};
