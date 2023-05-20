const sum = require('./sum');

describe("Testando a função sum", () => {

    test('adicionando 1 + 2 não tem que retornar 0', () => {
        expect(sum(1, 2)).not.toBe(0);
    })
    
    test('2 + 2 = 3', () => {
        expect(sum(2, 2)).toBe(4);
    })

})

