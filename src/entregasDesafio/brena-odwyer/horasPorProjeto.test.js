const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calcular Horas de projeto', () => {
    test('Se a lista contendo três (setup, construcao_1_pagina e ssr) funcionalidades terá 24 horas', () => {
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"] // somando as horas lá na constante dá 24

        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    })

    test('Calcular horas quando não existe a funcionalidade', () => {
        const listaFuncionalidadeInexistente = ["testes"]
        expect(calcularHorasDeProjeto(listaFuncionalidadeInexistente)).toBeNaN()

    }) // posso fazer um teste incluindo todas as funcionalidades
})

describe('Calcular Horas de projeto', () => {
    test('Com a lista contendo todas as funcionalidades terá 104 horas', () => {
        const listaDeFuncionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "integracao_api_propria"] 
        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(104)
    })
})