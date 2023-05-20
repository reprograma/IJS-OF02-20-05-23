// Testes aqui
const {calcularValorPorHora} = require("../../../dominio/calculadora/Hora/valorHora")

describe("Calcular valor por Hora", () => {
    
    test("Salario é 2000,00 e o valor da hora é 12,00", () => {
        expect(calcularValorPorHora(2000)).toBe(12)
    })

    test("Salario é 1500,00, hora paga é menor que 10" , () => {
        expect(calcularValorPorHora(1500)).toBeLessThan(10);
    })

    test("Salario é 2000,00, hora paga maior igual a 10" , () => {
        expect(calcularValorPorHora(2000)).toBeGreaterThanOrEqual(10);
    })

    test("Valor informado não é string", () => {
        expect(typeof calcularValorPorHora(1500)).not.toBe('string');
    })

})