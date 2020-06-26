import { combineReducers } from "redux";

import * as session from "./session";
import * as visitors from "./visitors";

export interface IState {
  session: session.IState;
  visitors: visitors.IState;
}

export const reducer = combineReducers({
  session: session.reducer,
  visitors: visitors.reducer,
});
