const { calcularPacote } = require("./pacote")

describe("Calcular Pacote", () => {
  test("Um projeto de 104 horas deve retornar pacote_premium", () => {
    const horasDeProjeto = 104

    expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
  })

  test("Projeto de 50 horas deve retornar pacote_intermediario", () => {
    const horasProjeto = 50

    expect(calcularPacote(horasProjeto)).toBe("pacote_intermediario")
  })

  test("Projeto de 199 horas deve retornar pacote_premium", () => {
    const horasDoProjeto = 199

    expect(calcularPacote(horasDoProjeto)).toBe("pacote_premium")
  })
})