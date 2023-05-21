const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora");

describe("Calcular valor por Hora ", () => {
  // test("salário Mínimo de R$130,00", () => {
  //   expect(calcularValorPorHora(1300)).toBe(8)
  //   expect(calcularValorPorHora(1300)).toBeGreaterThan(7)
  // })

  test("salário Mínimo de R$1.300,00 - valor p/hora esperado R$8,00", () => {
    const salarioMinimo = 1300
    const valorPorHoraReal = calcularValorPorHora(salarioMinimo);
    const valorPorHoraEsperado = 8
    const zero = 0
    expect(valorPorHoraReal).toBe(valorPorHoraEsperado)
    expect(valorPorHoraReal).toBeGreaterThan(zero)
  })

  test("Salário de R$5.000,00 - valor p/hora esperado R$29,00", () => {
    const salario = 5000
    expect(calcularValorPorHora(salario)).toBe(29);
  })
})