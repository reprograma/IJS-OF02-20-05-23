const { calcularHorasDeProjeto } = require("./horasPorProjeto")


describe("Calcular horas de projeto", () => {

    test("Se a lista contendo 3 funcionalidades terá x horas", () => {
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    })

    test("Calcular horas quando nao existe funcionalidades", () => {
        const listaDeFuncionalidadesExistentes = ["testes"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidadesExistentes)).toBeNaN()
    })

    test("Todas as funcionalidades", () => {
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
