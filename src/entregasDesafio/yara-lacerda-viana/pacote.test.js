const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')


describe('Calcular pacote', () => {
    test('Um projeto de 104 horas deve retornar pacote_premium', () => {
        const horasDeProjeto = 104

        expect(calcularPacote(horasDeProjeto)).toBe('pacote_premium')
    })

    test('Projeto de 50h deve retornar pacote_basico', () => {
        const horasDeProjeto = 50

        expect(calcularPacote(horasDeProjeto)).toBe('pacote_basico')
    })

    test('Projeto de 75h deve retornar pacote_intermediario', () => {
        const horasProjeto = 75
        
        expect(calcularPacote(horasProjeto)).toBe('pacote_intermediario')
    })

    test('Projeto de 185h deve retornar pacote_premium', () => {
        const horasProjeto = 185
        expect(calcularPacote(horasProjeto)).toBe('pacote_premium')
    })

})