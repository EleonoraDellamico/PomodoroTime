const isWorkTimerZero = require('./pomodoro');

test('testing the first test', () => {
  expect(true).toBeTruthy();
});

test('testing isWorkTimerZero return true', () => {
    expect(isWorkTimerZero(0, 0)).toBeTruthy();
});

test('give minutes 1 isWorkTimerZero then return false', () => {
    expect(isWorkTimerZero(1, 0)).toBeFalsy();
});

test('give minutes undefined isWorkTimerZero then return false', () => {
    expect(isWorkTimerZero(undefined, 0)).toBeFalsy();
});

test('give minutes on string 0 isWorkTimerZero then return true', () => {
    expect(isWorkTimerZero("00", 0)).toBeTruthy();
});
