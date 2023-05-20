
const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular Valor POr Hora", () => {
    test("Salario mínimo de 1300 reais", () => {
        expect(calcularValorPorHora(1300)).toBe(8)
    }) 
})

