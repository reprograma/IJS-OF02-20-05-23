const { calcularPacote } = require('./pacote');

describe("Calcular pacote", () =>{
  test("Calcular porojeto de 104 deve retornar pacote_premium", () =>{
    const horasDeProjeto = 104

    expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
  })

  test("Deve retornar pacote básico", () => {
    const horasDeProjeto = 50

    expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")
  })
})