const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

describe('Cálculo do valor total de um projeto', () => {
  test('Deve calcular corretamente o valor total do projeto com o pacote básico', () => {
    const funcionalidades = ['setup', 'formulario'];
    const valorHora = 30;
    const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(valorTotal).toBe(792); // Substitua pelo valor esperado
  });

  test('Deve calcular corretamente o valor total do projeto com o pacote intermediário', () => {
    const funcionalidades = ['responsividade', 'otimizacao_seo', 'construcao_1_pagina'];
    const valorHora = 35;
    const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(valorTotal).toBe(1540); // Substitua pelo valor esperado
  });

  test('Deve calcular corretamente o valor total do projeto com o pacote premium', () => {
    const funcionalidades = ['integracao_mailchimp', 'ssr', 'integracao_api_propria'];
    const valorHora = 40;
    const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(valorTotal).toBe(1760); // Substitua pelo valor esperado
  });
});
