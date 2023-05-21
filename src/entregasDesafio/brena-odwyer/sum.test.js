const sum = require('./sum');

// o describe serve para testar algumas funcionalidades dentro da mesma função
// dois parâmetros, uma string e uma callback
describe('sum', () => {
    test('adds 1 + 2 it is not 0', () => {
        expect(sum(1, 2)).not.toBe(0); //expect é um método do jest
    });
})
// a função teste recebe dois parâmetros, uma string e uma callback
test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3)
})

// é boa prática que cada funcionalidade esteja em um arquivo, aqui o soma é um arquivo
//mas se o projeto for uma calculadora, o arquivo pode ter todos os cálculos feitos ali
// ter um arquivo de teste para cada aquivo js

//O describe é uma forma de organização dos testes, uma forma de demonstrar que aquele conjunto de testes faz sentido com o titulo do describe
// Em termos de arquitetura, vai depender do time, mas o teste pode vir no mesmo arquivo que está a funcionalidade (como está aqui)
// Ou pode ser criado uma pasta que normalmente é __teste__ e os testes estarem lá