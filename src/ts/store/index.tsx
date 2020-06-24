import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { reducer } from "../reducers";

declare global {
  // tslint:disable-next-line
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

// tslint:disable-next-line
const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk),
));

export default store;
