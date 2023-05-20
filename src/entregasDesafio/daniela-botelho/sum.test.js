const sum = require('./sum');

describe('Testando a função SUM', () => {

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
    
    test('adds 2 + 3 not to equal 4', () => {
        expect(sum(2, 1)).not.toBe(4);
    })

})    

