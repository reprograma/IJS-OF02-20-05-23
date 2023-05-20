const { calcularValorPorHora } = require("../../../dominio/calculadora/Hora/valorHora");
const { calcularValorTotalProjeto } = require("./valorProjeto");


describe("Valor do Projeto", () => {
    const listaDeFuncionalidades = [ "setup", "ssr", "construcao_1_pagina"]
    
    const listaTodasFuncionalidades = ["setup","formulario","responsividade",
            "otimizacao_seo", "construcao_1_pagina","integracao_mailchimp",
            "ssr","integracao_api_propria"] 
    
    const listaVazia = [ ]        

    
    test("Valor do projeto com 3 funcionalidades de 8 horas cada e valor da hora 10,00, é 264,00" , () => {
        expect(calcularValorTotalProjeto(listaDeFuncionalidades,10)).toBe(264);
    })

    test("Valor do projeto com todas as funcionalidades e valor da hora 8,00 é maior que 900", () => {
        expect(calcularValorTotalProjeto(listaTodasFuncionalidades,8)).toBeGreaterThan(900);
    })

    test("Valor do projeto todas as funcinalidades e salario de 2200 é 1555", () => {
        expect(calcularValorTotalProjeto(listaTodasFuncionalidades,calcularValorPorHora(2200))).toBe(1555);
    })

    test("Valor do projeto sem funcionalidades e 8 horas seja 0", () => {
        expect(calcularValorTotalProjeto(listaVazia,8)).toBe(0);
    })

    
})