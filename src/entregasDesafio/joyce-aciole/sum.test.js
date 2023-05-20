const sum = require('./sum');

describe ('Testando o SUM', () => { 

test('adicionando 1 + 2 e tem que ser igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('2 + 2 = 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
})

describe('Verificando o SUM', () => {
    test('Verificando se o NÃO É igual a 3', () => {
      expect(sum(1, 4)).toBe(false);
    });
  });