const {calcularValorTotalProjeto} = require("./valorProjeto")

describe("Calcular Valor Total do Projeto", () => {
    test("Pacote Básico possui adicional de 10%", () => {
        const funcionalidades = ["setup", "construcao_1_pagina", "ssr"]
        const valorDaHora = 10

        expect(calcularValorTotalProjeto(funcionalidades, valorDaHora)).toBe(264)
    })

    test("Pacote Intermediário possui adicional de 12%", () => {
        const funcionalidades = ["formulario", "responsividade", "otimizacao_seo", "integracao_mailchimp", "integracao_api_propria"]
        const valorDaHora = 20

        expect(calcularValorTotalProjeto(funcionalidades, valorDaHora)).toBe(1792)
    })

    test("Pacote Premium possui adicional de 15%", () => {
        const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "integracao_api_propria"]
        const valorDaHora = 20

        expect(calcularValorTotalProjeto(funcionalidades, valorDaHora)).toBe(2392)
    })
})