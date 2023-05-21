const { calcularPacote } = require( './pacote')

describe('calcular Pacote', () => {
    test('Um projeto de 104 hooras deve retornar pacote_premium', () =>{
        const horasDeProjeto = 104

        expect(calcularPacote(horasDeProjeto)).toBe('pacote_premium')
    })
    test('Projeto de 50h deve retornar pacote_basico', () => {
        const  horasProjeto = 50

        expect(calcularPacote(horasProjeto)).toBe('pacote_basico')
    })
})