const { calcularPacote } = require("./pacote")

describe("Calcular Pacote", () => {
    
    test("Projeto de 200h retorna pacote_premium", () => {
        const horasDeProjeto = 200
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium"
        )
    })   

    test("Projeto de 199h retorna pacote_premium", () => {
        const horasDeProjeto = 199
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    })

    test("Projeto de 100h retorna pacote_intermediario", () => {
        const horasDeProjeto = 100
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario")
    }) 

    test("Projeto de 98h retorna pacote_intermediario", () => {
        const horasDeProjeto = 98
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario")
    })
    

    test("Projeto de 50h retorna pacote_basico", () => {
        const horasDeProjeto = 50
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")
    }) 

    test("Projeto de 30h retorna pacote_basico", () => {
        const horasDeProjeto = 30
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")
    }) 


})