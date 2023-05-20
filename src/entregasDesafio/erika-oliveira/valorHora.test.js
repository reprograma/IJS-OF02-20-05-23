const calcularValorPorHora = require('../../dominio/calculadora/Hora/valorHora');

describe("Calcular valor por Hora", () => {
  test("Salário mínimo R$ 1.300,00" ,() => {

    expect(calcularValorPorHora(1.300)).toBe(8)
  });

  test("" , () => {

  })
})