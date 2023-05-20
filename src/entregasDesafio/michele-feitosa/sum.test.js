const sum = require('./sum');

test('somando 1 + 2 e tem que retornar 3', () => {
  expect(sum(1, 2)).toBe(3);
});