import { MESSAGE } from "../utils/constants";

function isErrorInitialState({ initVal, min, max }) {
  if (min && initVal < min) return MESSAGE.MIN_ERROR;
  if (max && initVal > max) return MESSAGE.MAX_ERROR;
  return false;
}

export function createCounter({ initVal = 0, min, max } = {}) {
  return {
    val() {
      return isErrorInitialState({ initVal, min, max }) || initVal;
    },
    inc() {
      if (!!isErrorInitialState({ initVal, min, max }))
        return isErrorInitialState({ initVal, min, max });
      if (max && initVal + 1 >= max) {
        return initVal;
      }
      return ++initVal;
    },
    dec() {
      if (!!isErrorInitialState({ initVal, min, max }))
        return isErrorInitialState({ initVal, min, max });
      if (min && initVal - 1 <= min) {
        return initVal;
      }
      return --initVal;
    },
    isMax() {
      if (!!isErrorInitialState({ initVal, min, max }))
        return isErrorInitialState({ initVal, min, max });
      if (initVal === max) {
        return true;
      }
      return false;
    },
    isMin() {
      if (!!isErrorInitialState({ initVal, min, max }))
        return isErrorInitialState({ initVal, min, max });
      if (initVal === min) {
        return true;
      }
      return false;
    },
  };
}
