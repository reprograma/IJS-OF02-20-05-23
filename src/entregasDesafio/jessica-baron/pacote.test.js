const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("Calcular Pacote", () => {
    test("Um projeto de 104 horas deve retornar pacote premium", () => {
    const horasDeProjeto = 104
    expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")

})

    test("Projeto de 50h deve retornar pacote básico", () => {
        const horasProjeto = 30
        expect(calcularPacote(horasProjeto)).toBe("pacote_basico")
    })

})