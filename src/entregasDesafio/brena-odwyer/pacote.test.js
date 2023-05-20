const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote', () => {
    test('Um projeto de 104 horas deve retornar "pacote_premium"', () => {
        const horasDeProjeto = 104

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium") // adicionar um teste para as condições (um número menor que 50; 50; um número entre 50 e 100; 100; um número entre 100 e 200 já tem; 200; um número maior que 200)

    })

})