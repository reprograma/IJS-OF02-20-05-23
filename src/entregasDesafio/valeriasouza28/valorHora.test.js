const { calcularValorPorHora } = require("./valorHora");

describe("Calcular Valor hora", () => {
    test("Salario mínimo de 1300 reais", () => {
        expect(calcularValorPorHora(1300)).toBe(8);
    });

    test("Salário mínimo de -1000 reais negativos", () => {
        expect(() => calcularValorPorHora(-1000)).toThrow(
            "O salário deve ser um número válido e maior que zero."
        );
    });

    test("Salário igual a zero", () => {
        expect(() => calcularValorPorHora(0)).toThrow(
            "O salário deve ser um número válido e maior que zero."
        );
    });
});
