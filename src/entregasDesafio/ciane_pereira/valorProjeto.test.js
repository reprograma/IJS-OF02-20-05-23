const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto') 

describe("Calcular valor total projeto", () => {

    test("Projeto com 104 horas receber taxa contratual de 15% para valor do pacote Premium", () => {
        const listaDeFuncionalidades = ['setup','formulario', 'responsividade','otimizacao_seo', 'construcao_1_pagina','integracao_mailchimp', 'ssr', 'integracao_api_propria']
        const valorHora = 8 

        expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(957)
    })

    test("Projeto com 64 horas receber taxa contratual de 12% para valor do pacote Intermediário", () => {
        const listaDeFuncionalidades = ['setup','formulario', 'responsividade','otimizacao_seo', 'construcao_1_pagina','integracao_mailchimp']
        const valorHora = 8 
    
       
    })
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(573)
    
    test("Projeto com 24 horas receber taxa contratual de 10% para valor do pacote Básico", () => {
        const listaDeFuncionalidades = ['setup','formulario']
        const valorHora = 8 
    
        expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(211)
    })
})