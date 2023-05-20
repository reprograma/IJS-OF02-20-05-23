const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")
const salarioMinimo = 1300
const valorHoraCalculado = calcularValorPorHora(salarioMinimo)

describe("Cálculo do Valor Por Hora", () => {
    test("Valor por hora de um salário de 1330 deve ser 8h", () => {
        const valorHoraEsperado = 8
        
        expect(valorHoraCalculado).toBe(valorHoraEsperado)
        
    })
    
    test("Valor por hora do salário mínimo seja maior que zero", () => {
        const zero = 0
        expect(valorHoraCalculado).toBeGreaterThan(zero)
    })
})