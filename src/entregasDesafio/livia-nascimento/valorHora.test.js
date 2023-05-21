const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe("-> Testando a funcionalidade valor da hora", () => {
    test("Para um salário mensal de R$ 1300, a hora deverá valer R$ 8", () => {
        expect(calcularValorPorHora(1300)).toBe(8)
    }) 
    test("Para um salário mensal de R$ 2000, a hora deverá valer R$ 12", () => {
        expect(calcularValorPorHora(2000)).toBe(12)
    })

})