const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Given undefined values when sum then is undefined', () => {
  expect(sum(undefined, undefined)).toBeUndefined();
});

test('Given a undefined value and a number when sum then the result is the number', () => {
  expect(sum(2, undefined)).toEqual(2);
  expect(sum(undefined, 5)).toEqual(5);
});

test('Given a string value and a number when sum then result is a string', () => {
  expect(sum('4', 6)).toEqual('46');
  expect(sum('wop', 6)).toEqual('wop6');
  expect(sum('🛹', 6)).toEqual('🛹6');
});

test('Given two boolean values when sum then the result is a boolean', () => {
  expect(sum(true, true)).toEqual(true);
  expect(sum(false, false)).toEqual(false);
  expect(sum(true, false)).toEqual(false);
  expect(sum(1, false)).toEqual(false);
});

test('Given two objects with age property when sum then the result is the sum of ages', () => {
  expect(sum({name: 'Eli', age: 33}, {name: 'Eli', age: 33})).toEqual(66);
});


test('Given two objects with no age property when sum then the result is undefined', () => {
  expect(sum({name: 'Eli'}, {name: 'Eli'})).toEqual(undefined);
});
