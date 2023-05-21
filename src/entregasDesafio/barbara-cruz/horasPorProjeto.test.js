const {calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calcular Horas de Projeto", () => {
    test("Se a lista contendo 3 funcionalidades terá 24 horas", () => {
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    })

    test("Calcular horas quanto não existe a funcionalidade", () => {
        const listaFuncionalidadeInexistente = ["testes"]

        expect(calcularHorasDeProjeto(listaFuncionalidadeInexistente)).toBeNaN()
    })

    test("Todas as funcionalidades dão 104 horas de projeto", () => {
        const listaTodasFuncionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "integracao_api_propria"]

        expect(calcularHorasDeProjeto(listaTodasFuncionalidades)).toBe(104)
    })

    test("Funcionalidades mais demoradas dão 80h", () => {
        const funcionalidades = ["formulario", "responsividade", "otimizacao_seo", "integracao_mailchimp", "integracao_api_propria"]
        
        expect(calcularHorasDeProjeto(funcionalidades)).toBe(80)
    })

})