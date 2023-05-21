const { calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

describe("-> Testando cálculo do valor total", () => {
    const listaFuncionalidades = ["ssr", "formulario", "setup"]
    const valorHora = 15
    test("Teste de tipo", () => {
        expect(typeof calcularValorTotalProjeto(listaFuncionalidades, valorHora)).toBe('number')
    })
    test("Testando cálculo para hora R$ 15 e 3 funcionalidades", () => {
        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHora)).toBe(528)
    }) 
})