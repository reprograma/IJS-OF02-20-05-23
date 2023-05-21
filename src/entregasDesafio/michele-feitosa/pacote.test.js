const {calcularPacote} = require("./pacote")


describe("calcular pacote", () => {
    test("Um projeto de 104 horas deve retornar pacote_premium", () => {
        const horasDeProjeto = 104
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
    })

    test("Projeto de 50h deve retornar pacote_basico", () => {
        const horasProjeto = 50
        expect(calcularPacote(horasProjeto)).toBe("pacote_basico") 
    })

    test('um projeto com mais de 50h e com menos de 100h, deve retornar pacote_intermediário', () => {
        const horasDeProjeto = 80
        expect(calcularPacote(horasDeProjeto)).toBe('pacote_intermediario');
      });

      test('um projeto com mais de 100h e com menos de 200h, deve retornar pacote_premium', () => {
        const horasDeProjeto = 140
        expect(calcularPacote(horasDeProjeto)).toBe('pacote_premium');
      });
   
})