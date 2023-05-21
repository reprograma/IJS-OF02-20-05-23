const {calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto")

describe("Cálculo do Valor do Projeto", ()=>{
    test("Projeto com 1 Funcionalidade, Sendo 8 reais a Hora Deve Retornar 70", ()=>{
        const listaFuncionalidades = ["setup"]
        const valorHora = 8

        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHora)).toBe(70)
    })

    test("Projeto com 3 Funcionalidades, Sendo 8 Reais a Hora Deve Retornar 238", ()=>{
        const listaFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]
        const valorHora = 9

        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHora)).toBe(238)
    })

    test("Projeto com 4 Funcionalidades, Sendo 8 Reais a Hora Deve Retornar 352", ()=>{
        const listaFuncionalidades = ["ssr", "setup", "responsividade", "construcao_1_pagina"]
        const valorHora = 8

        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHora)).toBe(352)
    })

    test("Projeto Todas as Funcionalidades, Sendo 8 Reais a Hora Deve Retornar 1404", ()=>{
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
        ]
        const valorHora = 9

        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHora)).toBe(1404)
    })
})  