const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular Valor por Hora", () => {
    const salarioMinimo = 1300
    const valorPorHoraCalculado = calcularValorPorHora(salarioMinimo)

    test("Valor Por hora para um Salário Mínimo de 1300 reais deve ser 8 reais/hora", () => {
        const valorPorHoraSalárioMínimo = 8
        expect(valorPorHoraCalculado).toBe(valorPorHoraSalárioMínimo)
        
    })

    test("Valor por hora do Salário que seja maior que zero", () => {
        const zero = 0
        expect(valorPorHoraCalculado).toBeGreaterThan(zero)
    })
})