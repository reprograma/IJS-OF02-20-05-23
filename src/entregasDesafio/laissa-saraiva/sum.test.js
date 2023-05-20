const sum = require('./sum');

describe("sum", () => {

  test("adicionando 1 + 2 e tem que retornar 3", () => {
    expect(sum(1,2)).toBe(3);
  })
  
  test("1 + 2 , não deve retornar 0", () => {
  
    expect(sum(1,2)).not.toBe(0)
  
  })
})
