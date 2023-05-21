const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")

describe('Cálculo do valor por cada hora trabalhada', () => {
  test('Deve calcular corretamente o valor por hora', () => {
    const rendaMensal = 3000;
    const valorPorHora = calcularValorPorHora(rendaMensal);
    expect(valorPorHora).toBe(18); // Substitua pelo valor esperado
  });
});

//Código em partes
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