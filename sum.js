function sum(a, b) {
  if (a === undefined && b === undefined) {
    return undefined;
  }

  a = (a === undefined)? 0: a;
  b = (b === undefined)? 0: b;

  if (a === true && b === true) {
    return true;
  }

  let falseValue = false;
  if (a === falseValue || b === falseValue) {
    return false;
  }

  if ((typeof a === 'object' && a !== null) &&
      (typeof b === 'object' && b !== null)) {
    if (a.hasOwnProperty('age') && b.hasOwnProperty('age')) {
      return a.age + b.age;
    }
    return undefined;
  }

  return a + b;
}

module.exports = sum;