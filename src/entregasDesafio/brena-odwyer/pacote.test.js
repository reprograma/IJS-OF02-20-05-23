const { calcularPacote } = require('./pacote')

describe('Calcular pacote', () => {
    test('Um projeto de 40 horas deve retornar "pacote_basico"', () => {
        const horasDeProjeto = 40

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico") // adicionar um teste para as condições (um número menor que 50; 50; um número entre 50 e 100; 100; um número entre 100 e 200 já tem; 200; um número maior que 200)

    })

    test('Um projeto de 50 horas deve retornar "pacote_basico"', () => {
        const horasDeProjeto = 50

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico") 
    })

    test('Um projeto de 100 horas deve retornar "pacote_basico"', () => {
        const horasDeProjeto = 100

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario") 
    })


    test('Um projeto de 104 horas deve retornar "pacote_premium"', () => {
        const horasDeProjeto = 104

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium") 

    })

    

})