const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")

describe("Calcular valor total do projeto", () => {

    test("Quando o total de horas for de 0h a 50h então, deve aplicar a taxa do pacote_basico 10%", () => {
        const funcionalidades = [
            "ssr"
        ]

        const funcionalidades2 = [
            "ssr",
            "ssr",
            "ssr",
            "ssr",
            "ssr",
            "ssr"
        ]

        const valorHora = 10

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(88)
        expect(calcularValorTotalProjeto(funcionalidades2, valorHora)).toBe(528)
    })

    test("Quando o valor de horas for entre 51h a 99h, deve aplicar a taxa do pacote_intermediario 12%", () => {
        const funcionalidades = [
            "formulario",
            "formulario",
            "formulario",
            "formulario"
        ]

        const funcionalidades2 = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "ssr"
        ]

        const valorHora = 10

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(717)
        expect(calcularValorTotalProjeto(funcionalidades2, valorHora)).toBe(1075)
    })

    test("Quando o valor de horas for entre 101h a 200h, deve aplicar a taxa do pacote_premium 15%", () => {
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

        const funcionalidades2 = [
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario"
        ]

        const valorHora = 10        

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(1196)
        expect(calcularValorTotalProjeto(funcionalidades2, valorHora)).toBe(2208)
    })

    test("Quando o valor for maior de 200h deve lançar uma exceção typeError", ()=> {
        const funcionalidades3 = [
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario",
            "formulario"
        ]

        const valorHora = 10

        expect(() => {
            calcularValorTotalProjeto(funcionalidades3, valorHora);
          }).toThrowError(TypeError);
    })

})
