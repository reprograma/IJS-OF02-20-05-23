const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Calcular volar por hora", () => {
  test("Salário mínimo de 1300 reais", () => {
    const valorPorHoraReal = calcularValorPorHora(1300);
    const valorPorHoraEsperado = 8;
    const zero = 0;
    expect(valorPorHoraReal).toBe(valorPorHoraEsperado);
    expect(valorPorHoraReal).toBeGreaterThan(zero);
  });
});
