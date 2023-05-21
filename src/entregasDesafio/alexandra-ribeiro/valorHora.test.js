const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")


describe("Calcular valor por hora", () => {

    const salarioMinimo = 1300
    const valorPorHoraCalculado = calcularValorPorHora(salarioMinimo);
    const valorPorHoraEsperado = 8

    test("Salário mínimo de 1300 reais", () => {
        
        expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado)
        expect(valorPorHoraCalculado).toBeGreaterThan(7)
    })

    test("", () => {

    })
})