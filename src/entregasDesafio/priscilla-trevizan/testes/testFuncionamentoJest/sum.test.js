const { describe } = require('node:test');
const sum = require('./sum');

describe('Testando a função sum', () => {
    test('adds 1 + 2 to equal 3', () =>{
        expect(sum(1,2)).toBe(3);
    });

    test('1 + 2 = 3', () => {
        expect(sum(1,2)).not.toBe(0)
    })

    test('2 + 2 = 3', () => {
        expect(sum(2,2)).toBe(4)
    })
})

describe('Testando a função sum com números quebrados', () => {
    test('adds 0.5 + 1.5 to equal 2', () =>{
        expect(sum(0.5,1.5)).toBe(2);
    });

})