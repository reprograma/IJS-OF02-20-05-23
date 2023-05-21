const sum = require('./sum')

describe('Testando a função sum', () => {
    test("adicioando 1 + 2 e não tem que retornar 0", () => {
        expect(sum(1, 2)).not.toBe(0)
    })
    
    test('2 + 2 = 4', ( ) => {
        expect(sum(2, 2)).toBe(4)
    })
})

describe('Testando números quebrados', () => {
    test('0.5 + 2.5 = 3', () => { 
        expect(sum(0.5, 2.5)).toBe(3)
     })
})