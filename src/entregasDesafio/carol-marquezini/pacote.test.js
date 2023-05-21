const { calcularPacote } = require("./pacote")

describe("Calcular pacote", () => {

    test("Projeto de até 50h deve retornar pacote básico", () => {
        const horasDeProjeto = 50

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")

    })

    test("Projeto de até 100h deve retornar pacote intermediário", () => {

        const horasDeProjeto = 95

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario")

    })

    test("Projeto de até 200h deve retornar pacote premium", () => {
        const horasDeProjeto = 104

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    })


})