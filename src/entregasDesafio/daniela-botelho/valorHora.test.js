// Testes aqui
const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular valor por Hora", () => {
    
    test("Salario minimo 1300,00", () => {
        expect(calcularValorPorHora(2200)).toBe(13)
    })

    test("Hora paga é menor que 10" , () => {
        expect(calcularValorPorHora(1500)).toBeLessThan(10);
    })

    test("Hora paga maior igual a 10" , () => {
        expect(calcularValorPorHora(2000)).toBeGreaterThanOrEqual(10);
    })

    test("Valor informado não é string", () => {
        expect(typeof calcularValorPorHora(1500)).not.toBe('string');
    })

})