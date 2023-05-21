const {calcularValorTotalProjeto} = require ("./valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Valor do Projeto", () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_intermediario")
    })
    test("retorna valor total do projeto conforme funcionalidades e valor da hora trabalho informados ", () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'integracao_mailchimp',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]
        const valorHora = 100
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
        expect(result).toEqual(18000)
})
});




// testar passar parametro de funcionalidades e valor hora e calcular que tipo de pacote é e o valor total"