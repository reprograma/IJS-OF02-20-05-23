const {calcularPacote} = require("./pacote")

describe("Calcular Pacote", () => {
    test("Um projeto de 104 horas deve retornar pacote_premium", () => {
        const horasDeProjeto = 104

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    })

    test("Projeto de 50h deve retornar pacote_basico", () => {
        const horasProjeto = 50
        expect(calcularPacote(horasProjeto)).toBe("pacote_basico")
    })

    test("Projeto de 75h deve retornar pacote_intermediario", () => {
        const horasProjeto = 75
        expect(calcularPacote(horasProjeto)).toBe("pacote_intermediario")
    })

    test("Projeto de 150h deve retornar pacote_premium", () => {
        const horasProjeto = 150
        expect(calcularPacote(horasProjeto)).toBe("pacote_premium")
    })
})
