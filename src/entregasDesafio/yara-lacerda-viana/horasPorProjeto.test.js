
const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calcular horas de projeto', () => {
    test('Testar se a lista contendo 3 funcionalidades terá 24 horas', () => {
     const listaDeFuncionalidades = ['setup', 'construcao_1_pagina', 'ssr']

     expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    })

    test('Calcular horas quando não existe a funcionalidade', () => {

        const listaFuncionalidadeInexistente = ['testes']

        expect(calcularHorasDeProjeto(listaFuncionalidadeInexistente)).toBeNaN()
    })

    test('Todas as funcionalidades', () => {
        const listTodas = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
        ]

        expect(calcularHorasDeProjeto(listTodas)).toBe(104)
    })
})
