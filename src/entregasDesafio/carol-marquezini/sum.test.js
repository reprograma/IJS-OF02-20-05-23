const sum = require('./sum')

describe("Testando a funcao sum", () => {

    //teste recebe dois parametros, string e function
    test("adicionando 1 + 2 e não tem que retornar 0",() => {
        
        expect(sum(1, 2)).not.toBe(0)
        
    })
    
    test("2 + 2 = 4", () => {
        
        expect(sum(2,2)).toBe(4)
        
    })
})
