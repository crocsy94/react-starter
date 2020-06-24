import * as actionTypes from "./types";

export function increaseVisitor() {
  return {
    type: actionTypes.INCREASE_VISITOR,
  };
}

export function decreaseVisitor() {
  return {
    type: actionTypes.DECREASE_VISITOR,
  };
}
