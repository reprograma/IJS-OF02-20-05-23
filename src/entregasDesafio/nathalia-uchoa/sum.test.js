const sum = require('./sum');


describe("Testando a função sum", ()=>{
    test('adicionando 1 + 2 não pode retornar 0', () => { 
        expect(sum(1, 2)).not.toBe(0);
     });
    
     test('adicionando 1 + 2 retorna 3', () => { 
        expect(sum(1, 2)).toBe(3);
     });
    
     test('2 + 2 = 4', () => { 
        expect(sum(2, 2)).toBe(4);
     });
});

