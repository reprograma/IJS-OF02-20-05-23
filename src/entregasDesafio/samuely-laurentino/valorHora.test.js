const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("tests value by hour", () => {
  test("minimal wage of 1300 reais", () => {
    const salarioMinimo = 1300;
    const valorPorHoraCalculado = calcularValorPorHora(salarioMinimo);
    const valorHoraEsperado = 8;
    expect(valorPorHoraCalculado).toBe(valorHoraEsperado);
    expect(valorPorHoraCalculado).toBeGreaterThan(7);
  });
});
