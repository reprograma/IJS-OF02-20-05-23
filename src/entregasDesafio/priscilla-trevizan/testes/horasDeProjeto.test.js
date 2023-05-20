const { calcularHorasDeProjeto }= require('../../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Calcular Horas do Projeto', () => {
    test('se a lista contendo 3 funcionaridades terá 24 horas', () =>{
        const listaDeFuncionalidades = ['setup', 'construcao_1_pagina', 'ssr']
        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    })

    test('Calcular Horas quando não existe a funcionalidade',() =>{
        const listaDeFuncionalidadeInexistente = ['testes']
        expect(calcularHorasDeProjeto(listaDeFuncionalidadeInexistente)).toBeNaN()

    })

    test('todas as funcionalidades retornam 104 horas de projeto',() =>{
        const listaTodas = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
          ]
        expect(calcularHorasDeProjeto(listaTodas)).toBe(104)

    })
})