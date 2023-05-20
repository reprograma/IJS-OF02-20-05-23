const sum = require('./sum')

describe("Teste da função sum", () => {
    test("Adicionando 1 + 2, que não retornará 0", () => {
        expect(sum(1,2)).not.toBe(0)
    })
    
    test("2 + 2 = 4", () => {
        expect(sum(2,2)).toBe(4)
    })

})
