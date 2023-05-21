const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe("Calcular Pacote", () => {
    test("Projeto de 104 horas deve retornar pacote Premium", () => {
        const horasDeProjeto = 104

        expect(calcularPacote(horasDeProjeto)).toBe('pacote_premium')
    })
    
    test("Projeto maior que 51 horas e menor que 100 horas deve retornar pacote intermediário", () => {        
        for (let horasDeProjeto = 51; horasDeProjeto < 100; horasDeProjeto++) {
        
        expect(calcularPacote(horasDeProjeto)).toBe('pacote_intermediario')
       }
     })

    test("Projeto de 50 horas deve retornar pacote básico", () => {
        const horasProjeto = 50     
        })
         
        expect(calcularPacote(horasProjeto)).toBe('pacote_basico')  
    })
    
