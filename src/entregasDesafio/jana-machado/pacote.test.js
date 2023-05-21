const {calcularPacote} = require("./pacote")

describe("Calcular Pacotes", () => {
    test("Projeto de 30 Horas Deve Retornar Pacote Básico", ()=>{
        const horasDeProjeto = 30

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")
    })

    test("Projeto de Até 50 Horas Deve Retornar Pacote Básico", ()=>{
        const horasDeProjeto = 50

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")
    })

    test("Projeto de 60 Horas Deve Retornar Pacote Intermediário", ()=>{
        const horasDeProjeto = 60

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario")
    })

    test("Projeto de Até 100 Horas Deve Retornar Pacote Intermediário", ()=>{
        const horasDeProjeto = 100

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario")
    })

    test("Projeto de 104 Horas Deve Retornar Pacote Premium", ()=>{
        const horasDeProjeto = 104

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    })

    test("Projeto de 150 Horas Deve Retornar Pacote Premium", ()=>{
        const horasDeProjeto = 150

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    })

    test("Projeto de Mais de 200 horas deve retornar Pacote Premium", ()=>{
        const horasDeProjeto = 200

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    })

})