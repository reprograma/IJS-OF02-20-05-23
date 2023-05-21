const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Cálculo do pacote necessário para o projeto', () => {
  test('Deve retornar o pacote básico para um total de horas de trabalho menor que 50', () => {
    const totalDeHoras = 40;
    const pacote = calcularPacote(totalDeHoras);
    expect(pacote).toBe('pacote_basico');
  });

  test('Deve retornar o pacote intermediário para um total de horas de trabalho entre 50 e 100', () => {
    const totalDeHoras = 80;
    const pacote = calcularPacote(totalDeHoras);
    expect(pacote).toBe('pacote_intermediario');
  });

  test('Deve retornar o pacote premium para um total de horas de trabalho maior que 100', () => {
    const totalDeHoras = 150;
    const pacote = calcularPacote(totalDeHoras);
    expect(pacote).toBe('pacote_premium');
  });
});