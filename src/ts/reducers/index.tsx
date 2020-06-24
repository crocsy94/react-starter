import { combineReducers } from "redux";
import * as visitors from "./visitors";

export interface IState {
  visitors: visitors.IState;
}

export const reducer = combineReducers({
  visitors: visitors.reducer,
});
