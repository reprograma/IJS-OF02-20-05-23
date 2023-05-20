const { calcularValorTotalProjeto } = require('../Projeto/valorProjeto');


describe('Calcular Valor Total Projeto', () => {
  test('um projeto que soma 104h deve receber a taxa de 15% para o valor de pacote_premium', () =>{
    const listaDeFuncionalidades = ['setup','formulario', 'responsividade','otimizacao_seo', 'construcao_1_pagina','integracao_mailchimp', 'ssr', 'integracao_api_propria'];
    const valorHora = 8;
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(957)
  });

  test('um projeto que soma 72h deve receber a taxa de 12% para o valor de pacote_intermediario', () =>{
    const listaDeFuncionalidades = ['setup','otimizacao_seo', 'construcao_1_pagina','integracao_mailchimp', 'ssr','integracao_api_propria'];
    const valorHora = 8;
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(645)
  });

  test('um projeto que soma 24h deve receber a taxa de 10% para o valor de pacote_basico', () =>{
    const listaDeFuncionalidades = ['setup', 'construcao_1_pagina', 'ssr'];
    const valorHora = 8;
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(211)
  });
});