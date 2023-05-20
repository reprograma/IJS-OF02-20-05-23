const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular Valor Por Hora", () => {
  const salarioMinimo = 1300
  const valorPorHoraCalculado = calcularValorPorHora(salarioMinimo)

  test("Valor por hora para um Salário mínimo de 1300 reais deve ser 8 reais/hora", () => {
    const valorPorHoraEsperado = 8
    
    expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado)
  })
  
  test("Valor por hora do salário mínimo seja maior que zero", () => {
    const zero = 0
    expect(valorPorHoraCalculado).toBeGreaterThan(zero)
  })
})