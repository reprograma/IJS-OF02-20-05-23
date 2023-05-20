const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("Calcular pacote", () => {
    test('Um projeto de 104 horas deve retornar pacote_premium', () => {
        const horasDeProjeto = 104;    
        expect(calcularPacote(horasDeProjeto)).toBe('pacote_premium');
    });

    test('Retorna pacote_basico caso o número total de horas seja = 50', () => {
        const totalDeHorasDeProjeto = 50;
         expect(calcularPacote(totalDeHorasDeProjeto)).toBe('pacote_basico')
    });

});