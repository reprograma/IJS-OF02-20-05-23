const { TAXAS_CONTRATUAIS_POR_PACOTE } = require("./constantes")
const { calcularValorBaseProjeto } = require("./valorProjeto")
const { calcularValorTotalProjeto } = require("./valorProjeto")


describe("Calcular valor base do projeto", () => {
  test("Considerando todas as funcionalidades disponíveis", () => {
    const totalDeHorasPorProjeto = 104

    expect(calcularValorBaseProjeto(totalDeHorasPorProjeto)).toBeNaN();
  })
})

describe("Aplicando taxas contratuais", () => {
  test("Taxa de pacote premium para 104 horas trabalhadas", () => {
    const totalDeHorasPorProjeto = 104
    
    expect(calcularValorTotalProjeto(calcularValorBaseProjeto)).toBe(TAXAS_CONTRATUAIS_POR_PACOTE[totalDeHorasPorProjeto])
  })
})