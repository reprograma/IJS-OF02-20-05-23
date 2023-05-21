const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")


describe("Testes com o Cálculo do Valor Total de Projeto", () => {

    test("O valor total do projeto nao atinge o teto de gastos", () => {

        const funcionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo"];
        const valorHora = 8;
        const budgetCeiling = 1000

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBeLessThan(budgetCeiling)
    })

    test("A taxa contratual desse projeto é de 10%", () => {

        const funcionalidades = [
            "setup",
            "otimizacao_seo"
        ];
        const valorHora = 8;
        ceilingPacoteBasico = 440
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBeLessThanOrEqual(ceilingPacoteBasico)
    })

    test("O valor retornado não é uma string.", () => {
        const funcionalidades = Array(4).fill("integracao_mailchimp")
        const valorHora = 8;
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).not.toBe(string)
    })

    test("O valor retornado é igual a zero.", () => {
        const funcionalidades = Array(0).fill("integracao_api_propria")
        const valorHora = 8;
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(0)
    })

})