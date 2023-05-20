const {calcularPacote} = require("./pacote")

describe("Calcular Pacote", () => {
    test("Calcular Projeto de 104 horas deve retornar Pacote Premium", ()=>{
        const horasDeProjeto = 104

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    })

    test("Projeto de 50 horas deve retornar Pacote Básico", ()=>{
        const horasDeProjeto = 50

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")
    })

    test("Projeto de 100 horas deve retornar Pacote Intermediario", ()=>{
        const horasDeProjeto = 100

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario")
    })

    test("Projeto de mais de 200 horas deve retornar Pacote Premium", ()=>{
        const horasDeProjeto = 200

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    })
})