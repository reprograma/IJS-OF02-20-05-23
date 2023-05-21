const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")
const salarioMinimo = 1300
const valorHoraCalculado = calcularValorPorHora(salarioMinimo)

describe("Cálculo do Valor Por Hora", () => {
    test("Salário de 1300 reais Deverá ser 8 reais a Hora", () => {
        const valorHoraEsperado = 8
        
        expect(valorHoraCalculado).toBe(valorHoraEsperado)
    })

    test("Salário de 2500 reais Deverá ser 15 reais a Hora", () => {
        const valorHoraEsperado = 15
        
        expect(calcularValorPorHora(2500)).toBe(valorHoraEsperado)
    })
    test("Salário de 3200 reais Deverá ser 19 reais a Hora", () => {
        const valorHoraEsperado = 19
        
        expect(calcularValorPorHora(3200)).toBe(valorHoraEsperado)
    })
    
    test("Valor Por Hora De Um Salário Mínimo Que Seja Maior Que Zero", () => {
        const zero = 0

        expect(valorHoraCalculado).toBeGreaterThan(zero)
    })
})