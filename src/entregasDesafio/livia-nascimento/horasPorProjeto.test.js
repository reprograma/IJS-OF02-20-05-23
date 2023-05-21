const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("-> Testando cálculo de horas de projeto", () => {
    test("Repetição de funcionalidade", () => {
        const listaFuncionalidades = Array(4).fill("construcao_1_pagina")
        listaFuncionalidades.push("ssr", "otimizacao_seo")
        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(56)
    })
    test("Funcionalidade inexistente", () => {
        const listaFuncionalidades = ["ssr", "otimizacao_seo", "desenvolvimento_layout"]
        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBeNaN()
    })
    test("Verificando se o retorno é um number", () => {
        const listaFuncionalidades = ["ssr", "otimizacao_seo", "construcao_1_pagina"]
        expect(typeof calcularHorasDeProjeto(listaFuncionalidades)).toBe('number')
    })
    test("Verificando se o retorno é zero caso a lista esteja vazia", () => {
        const listaFuncionalidades = []
        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(0)
    })
})