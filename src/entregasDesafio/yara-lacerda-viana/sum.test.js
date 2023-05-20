const sum = require('./sum');

test('adicionando 1 + 2 deve retornar 3', () => {
  expect(sum(1, 2)).toBe(3);
});