const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular valor por hora", () => {

  const valorPorHoraCalculado = calcularValorPorHora(1300);
  const valorPorHoraEsperado = 8;
  test("Valor por hora para um salário mínimo de 1300 reais deve ser 8reais/hora", () => {
    expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado)
    
  })

  test("Valor por hora do salário mínimo seja maior que zero", () => {
    const zero = 0;
    expect(valorPorHoraCalculado).toBeGreaterThan(zero)
  })
})
