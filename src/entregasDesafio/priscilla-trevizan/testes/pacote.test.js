const { calcularPacote } = require('../Projeto/pacote')

describe('Calcular Pacote', () => {
    test('um projeto de 104 horas deve retornar pacote Premium', () => {
        const horasDeProjeto = 104
        expect(calcularPacote(horasDeProjeto)).toBe('pacote_premium')
    });
    test('um projeto superior a 50 horas e inferior a 100 horas, deve retornar pacote Básico', () => {
        for (let horasDeProjeto = 51; horasDeProjeto < 100; horasDeProjeto++) {
          expect(calcularPacote(horasDeProjeto)).toBe('pacote_intermediario');
        }
      });
    test('um projeto de 50 horas deve retornar pacote Básico', () => {
        for (let horasDeProjeto = 0; horasDeProjeto <= 50; horasDeProjeto++)
        expect(calcularPacote(horasDeProjeto)).toBe('pacote_basico')
    });

})