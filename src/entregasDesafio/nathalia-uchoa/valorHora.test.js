const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Testando o cálculo de Valor Por Hora", () => {
   const rendaMensal = 1300;

   test("Se o valor da hora é igual ou maior a 8, valor da hora equivalente ao salário mínimo", () => {
      expect(calcularValorPorHora(rendaMensal)).toBeGreaterThanOrEqual(8)
   });

   test("Se o valor da hora do salário base é maior que zero", () => {
      const zero = 0;
      expect(calcularValorPorHora(rendaMensal)).toBeGreaterThan(zero)
   });

})