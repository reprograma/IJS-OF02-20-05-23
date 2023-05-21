const sum = require('./sum');

describe('sum', () => {
    test('adds 1 + 2 it is not 0', () => {
        expect(sum(1, 2)).not.toBe(0)
    })
})

test('adicionando 1 + 2 deve retornar 3', () => {
  expect(sum(1, 2)).toBe(3)
})