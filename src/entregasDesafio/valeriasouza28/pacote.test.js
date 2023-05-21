const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote", () => {
    test("Um projeto de 104 horas ", () => {
        const horasDeProjeto = 104;

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium");
    });
});
