const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular o Valor Por Hora", () => {
    const salarioMinimo = 1300;

    test("Se o valor da hora é igual a 8", () => { 
        expect(calcularValorPorHora(salarioMinimo)).toBe(8)
     });

     test("Se o valor da hora é maior que zero", () => { 
        const zero = 0;
        expect(calcularValorPorHora(salarioMinimo)).toBeGreaterThan(zero)
     });
})