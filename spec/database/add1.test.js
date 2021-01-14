/* eslint-disable no-undef */
const add1 = (x) => (x + 1);

test('adds 1 to the passed in number', () => {
  expect(add1(5)).toBe(6);
});
