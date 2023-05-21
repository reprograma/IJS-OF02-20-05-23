const { calcularValorTotalProjeto } = require("./valorProjeto")

describe("Testar valor do projeto por pacotes", () => {

    test("Valor do projeto para pacote básico ", () => {

        const valorHoraProjeto = 1
        const funcionalidades = [
            "setup",
            "ssr"
        ]
        expect(calcularValorTotalProjeto(funcionalidades,valorHoraProjeto)).toBe(18)
   
    })

    test("Valor do projeto para pacote intermediário", () => {
        const valorHoraProjeto = 1
        const funcionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
        ]

        expect(calcularValorTotalProjeto(funcionalidades, valorHoraProjeto)).toBe(72)
    })

    test("Valor do projeto para pacote premium", () => {
        const valorHoraProjeto = 1
        const funcionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
        ]

        expect(calcularValorTotalProjeto(funcionalidades, valorHoraProjeto)).toBe(120)
    })



})