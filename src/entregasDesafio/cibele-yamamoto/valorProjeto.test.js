const {calcularValorTotalProjeto} = require("./valorProjeto")

describe("Calcular Valor do Projeto", () => {
    const valorHora = 8

    test("Se o projeto tiver 24horas (<=50), taxa aplicada deve ser do Pacote Básico (1.1)", () => {
        const funcionalidades = ["setup", "formulario"] 

        // 8 horas + 16 horas = 24 horas => Pacote Básico
        // 24*8 = 192
        // 192 * 1.1 = 211 (round)
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(211)

    })

    test("Se o projeto tiver 56horas (> 50 e <=100), taxa aplicada deve ser do Pacote Intermediário (1.12)", () => {
        const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo" ] 

        // 8 horas + 16 horas + 16 horas + 16 horas = 56 horas => Pacote Intermediário
        // 56*8 = 448
        // 448 * 1.12 = 502 (round)
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(502)

    })


    test("Se projetos tiver 104ho (> 100), taxa aplicada deve ser do Pacote Básico (1.1)", () => {
        const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina",
            "integracao_mailchimp", "ssr", "integracao_api_propria"]       

        // Todas as funcionalidades = 104 horas => Pacote Premium
        // 104*8 = 832
        // 832 * 1.15 = 957 (round)
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(957)

    })

})

