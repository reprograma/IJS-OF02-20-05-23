//Testes para as condições de contorno (quando é básico, intermediário e premium), precisa ter esses 3 testes
const { calcularValorTotalProjeto } = require('./valorProjeto')
const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('Calcula o valor total do projeto', () => {
    const salarioMinimo = 1300
    const valorHora = calcularValorPorHora(salarioMinimo)
    test('Calcula o valor total do projeto com as taxas contratuais por pacote, sendo um pacote básico', () => {
        const funcionalidadeUnica = ["setup"]
        expect(calcularValorTotalProjeto(funcionalidadeUnica, valorHora)).toBe(70) // valor da hora utilizando a função recebendo o salário mínimo * 8(setup) * 1.1% do pacote_basico

    })
    test('Calcula o valor total do projeto com as taxas contratuais por pacote, sendo um pacote intermediário', () => {
        const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "integracao_api_propria"]
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(957) // valor da hora 20 * 104(soma das funcionalidades) * 1.12% do pacote_basico

    })
    test('Calcula o valor total do projeto com as taxas contratuais por pacote, sendo um pacote premium', () => {
        const funcionalidadesQueSomamPacotepremium = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "integracao_api_propria", "setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "ssr"] // soma 200 horas e entra no pacote premium
        expect(calcularValorTotalProjeto(funcionalidadesQueSomamPacotepremium, valorHora)).toBe(1840) // valor da hora * 200 * 1.15% do pacote_premium

    })
})

