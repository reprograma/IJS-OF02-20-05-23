const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Calcular valor por hora ", () => {
  test("Salário mínimo de 1300 reais", () => {
    const valorRealPorHora = calcularValorPorHora(1300);
    const valorPorHoraEsperado = 8;

    expect(valorRealPorHora).toBe(valorPorHoraEsperado);
  });
});
