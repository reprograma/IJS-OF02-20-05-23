const{ calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular valor por hora", () => {
    const valorPorHoraCalculado = calcularValorPorHora(1300)
    salarioMinimo= 1300
    test("Valor por hora para um Salário mínimo de 1300 reais deve ser R$8/hora", () => {
        const valorPorHoraEsperado = 8
        expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado)
     
    })

    test("Valor por hora salário mínimo seja maior que zero", () => {
        const zero = 0
        expect(valorPorHoraCalculado).toBeGreaterThan(zero)
    })
})