const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calcular Horas de Projeto", () => {
    test("Se a lista contendo três funcionalidades terá x horas", () => {
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    })

    test("Calcular horas quando não existe a funcionalidade", () => {
        const listaDeFuncionalidadesInexistentes = ["testes"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidadesInexistentes)).toBeNaN()
    })

    test("Todas as funcionalidades retornam 104 horas de projeto", () => {
        const listaTodas = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
        ]

        expect(calcularHorasDeProjeto(listaTodas)).toBe(104)
    })
})
