const sum = require('./sum');

describe("Testes relacionado a funcionalidade de SOMA", () => {

  test("Ao adicionar 1 + 2 , o valor retornado deve ser 3", () => {
    expect(sum(1,2)).toBe(3);
  })
  
  test("Ao adicionar 1 + 2 , não deve retornar 0", () => {
      expect(sum(1,2)).not.toBe(0)
    })
})
