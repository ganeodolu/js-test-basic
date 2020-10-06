export function createCounter({ initVal = 0, min, max } = {}) {
  // console.log(options)
  let value = initVal;
  // let value = options.initVal || 0;
  return {
    val() {
      return value;
    },
    inc() {
      return ++value;
    },
    dec() {
      return --value;
    },
    isMax() {
      return false;
    },
    isMin() {
      return false;
    },
  };
}
