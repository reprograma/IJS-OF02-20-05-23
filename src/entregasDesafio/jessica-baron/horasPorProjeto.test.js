const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calcular Horas de Projeto", () => {
    test("Lista com 3 funcionalidades retorna 24 Horas", () => {
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    })

    test("Calcular horas quando não existe a funcionalidade", () => {
        const listaDeFuncionalidadesInexistente = ["testes"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidadesInexistente)).toBeNaN()
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
            "integracao_api_propria"]

        expect(calcularHorasDeProjeto(listaTodas)).toBe(104)
    })
})