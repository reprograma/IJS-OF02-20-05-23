const { calcularPacote } = require ("../../dominio/calculadora/Projeto/pacote")


describe("Calcular Pacote", () => {
    test("Um projeto de 104 horas deve retornar pacote premium", () => {
        const horasDeProjeto = 104;

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    });

    test("Deve retornar pacote básico", () => {
        const horasDeProjeto = 50;

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")
    })
});