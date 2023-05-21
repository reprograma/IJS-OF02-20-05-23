const { calcularPacote } = require('./pacote')

describe("-> Testando os pacotes", () => {
    test("Em 50 horas, pacote básico", () => {
        expect(calcularPacote(50)).toEqual('pacote_basico')
    })
    test("Entre 50 horas e 100, pacote intermediario", () => {
        expect(calcularPacote(80)).toEqual('pacote_intermediario')
    })
    test("Em 100 horas, pacote intermediário", () => {
        expect(calcularPacote(100)).toEqual('pacote_intermediario')
    })
    test("Entre 100 horas e 200, pacote premium", () => {
        expect(calcularPacote(175)).toEqual('pacote_premium')
    })
    test("Em 200 horas, pacote premium", () => {
        expect(calcularPacote(200)).toEqual('pacote_premium')
    })
    test("Maior que 200 deve retornar um erro", () => {
        expect(() => calcularPacote(240)).toThrow()
    })
})