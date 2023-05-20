const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Calcular valor por hora", () => {
  const rendaMensal = 1300;
  test("Salário minimo de 1.300 reais ", () => {
    const rendaMensal = 1300;
    expect(calcularValorPorHora(rendaMensal)).toEqual(8);
  });

  test("Valor por hora do salario minimo é maior que 0", () => {
    expect(calcularValorPorHora(rendaMensal)).toBeGreaterThan(0);
  });

  test.skip("Deve retornar 'Not a valid input' se o input for diferente de um número ", () => {
    expect(calcularValorPorHora([])).toEqual("Not a valid input");
  });
});
