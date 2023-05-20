const sum = require('./sum');

describe("Testando a função sum", () => {
    test("adicionando 1 + 2 e tem que retornar 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    test("1 + 2 = 3", () => {
        expect(sum(1, 2)).toBe(3)
    })
})

describe("Testando números quebrados", () => {
    test("0.5 + 2.5 = 3", () => {
        expect(sum(0.5, 2.5)).toBe(3)
    })
})