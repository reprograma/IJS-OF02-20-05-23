const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe ("Calcular o valor por hora", () => {
    const salarioMinimo = 1300
    const valorPorHoraReal = calcularValorPorHora(salarioMinimo)
    test("salário mínimo de 1300 reais deve ser 8 reais por hora", () => {
        const valorPorHoraEsperado = 8
        expect(valorPorHoraReal).toBe(valorPorHoraEsperado)
    });

    test("o valor por hora do salário mínimo seja maior que zero", () => {
        const zero = 0
        expect(valorPorHoraReal).toBeGreaterThan(zero)
    });
})