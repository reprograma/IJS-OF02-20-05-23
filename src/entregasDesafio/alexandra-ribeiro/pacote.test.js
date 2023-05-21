const { calcularPacote } = require("./pacote")

describe("Calcular pacote", () => {
    test("Um projeto de 104 horas deve retornar pacote_premium", () => {
        const horasDeProjeto = 104;

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    })

    test("Projeto de 50h deve retornar pacote_basico", () => {
        const horasDeProjeto = 50

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")
    })
})

