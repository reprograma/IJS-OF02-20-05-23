const { calcularPacote } = require("./pacote")

describe("Calcular Pacote", () => {
    test("Projeto de 104 horas deve retornar pacote_premium", () => {
        const horasProjeto = 104

        expect(calcularPacote(horasProjeto)).toBe("pacote_premium")
    })

    test("Projeto de 50h deve retornar pacote básico", () => {
        const horasProjeto = 50

        expect(calcularPacote(horasProjeto)).toBe("pacote_basico")
    })

    test("Projeto de 30h deve retornar pacote básico", () => {
        const horasProjeto = 30

        expect(calcularPacote(horasProjeto)).toBe("pacote_basico")
    })
    
    test("Projeto de 80h deve retornar pacote intermediário", () => {
        const horasProjeto = 80

        expect(calcularPacote(horasProjeto)).toBe("pacote_intermediario")
    })

    test("Projeto de 100h deve retornar pacote intermediário", () => {
        const horasProjeto = 100

        expect(calcularPacote(horasProjeto)).toBe("pacote_intermediario")
    })

    test("Projeto de 157h deve retornar pacote premium", () => {
        const horasProjeto = 157

        expect(calcularPacote(horasProjeto)).toBe("pacote_premium")
    })

    test("Projeto de 200h deve retornar pacote premium", () => {
        const horasProjeto = 200

        expect(calcularPacote(horasProjeto)).toBe("pacote_premium")
    })
})

