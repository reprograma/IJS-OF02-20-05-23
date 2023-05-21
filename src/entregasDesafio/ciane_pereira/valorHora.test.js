const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular Valor Por Hora", () => {
    test("Salário mínimo de 1300 reais", () => {
        const valorPorHoraCalculado = calcularValorPorHora(1300)        
        const valorPorHoraEsperado = 8
        const zero = 0

        expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado)
        expect(valorPorHoraCalculado).toBeGreaterThan(zero)
    })
    
})