const { calcularPacote } = require("./pacote");

describe("Calcular pacote", () => {
    test("Um projeto de 104 horas deve retornar pacote_premium", () => {
        const horasDeProjeto = 104
        
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    }) 

    //a conta dessa função está errada, tem que arrumar no arquivo que está na minha pasta (projeto.js). Testar as possibilidades de pacotes
    test("Projeto de 50 horas deve retornar o pacote básico", () => { 
        const horasDeProjeto = 50;

        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")
    })
})