const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")

describe("Calcular o valor total do projeto com todas as funcionalidades", () => {
    const valorHorasPorProjeto = 104;
    const valorHora = 8;
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
    test("O valor base do projeto com todas as funcionalidades deve retornar 832", () => { 

       const valorBase = valorHorasPorProjeto * valorHora;

       expect(valorBase).toBe(832);
    })

    test("O valor total do projeto deve ser R$957", () => {
        
        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHora)).toBe(957)


    })
})
