const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');


describe('Verifica o valor do projeto + taxa contratual', () => {

    test('Pacote Básico: até 50h de trabalho, taxa de 10%', () => {
    const listaFuncionalidades = [
        'setup',
        'responsividade',
        'construcao_1_pagina',
        'integracao_mailchimp',
    ]
    const valorPorHoraEsperado = 10;
    const result = calcularValorTotalProjeto(listaFuncionalidades, valorPorHoraEsperado);

    expect(result).toEqual(528)
  })

  test('Pacote Intermediário: até 100h de trabalho, taxa de 12%', () => {
    const listaFuncionalidades = [
        'responsividade',
        'otimizacao_seo',
        'integracao_mailchimp',
        'integracao_api_propria',
        'formulario'
    ]
    const valorPorHoraEsperado = 10;
    const result = calcularValorTotalProjeto(listaFuncionalidades, valorPorHoraEsperado);

    expect(result).toEqual(896)
  })

  test('Pacote Premium: até 200h de trabalho, taxa de 15%', () => {
    const listaFuncionalidades = [
        'integracao_api_propria',
        'setup',
        'responsividade',
        'formulario',
        'integracao_mailchimp',
        'otimizacao_seo',
        'construcao_1_pagina',
        'integracao_mailchimp',
        'ssr',
        'integracao_api_propria',
        'formulario'
    ]
    const valorPorHoraEsperado = 10;
    const result = calcularValorTotalProjeto(listaFuncionalidades, valorPorHoraEsperado);

    expect(result).toEqual(1748)
  })

})