const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

describe('Calcular Valor do Projeto', () => {
    const valorHora = 8

/* 
Projeto de 32h : 32 * 8 : 256
Math.round(256 * 1.1) = 282
*/ 
    test('Se o projeto tiver 32h, a taxa aplicada deve ser do Pacote Básico (1.1)', () => {
        const funcionalidades = ['formulario', 'responsividade']
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(282)
    })

/* 
Projeto de 72h : 72 * 8 : 576
Math.round(576 * 1.12) = 645
*/ 
    test('Se o projeto tiver 72, a taxa aplicada deve ser do Pacote Intermediário (1.12)', () => {
        const funcionalidades = 
        [
         'formulario',
         'responsividade', 
         'otimizacao_seo',
         'construcao_1_pagina',
         'integracao_mailchimp'
        ] 
       expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(645)
    })


/* 
Projeto de 104h : 104 * 8 : 832
Math.round(832 * 1.15)
*/ 

test('Se projetos tiver 104 (> 100), a taxa aplicada deve ser do Pacote Premium (1.15)', () => {
        const funcionalidades = 
        [ 
        'setup',
        'formulario',
        'responsividade',
        'otimizacao_seo',
        'construcao_1_pagina',
        'integracao_mailchimp',
         'ssr',
        'integracao_api_propria'
        ]
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(957)
    })

})

