
const {calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto")

//3 testes das taxas contratuais - passar o array de funcionalidades e o valor da hora 

describe('Calcular o valor total do projeto', () => {
    const valorHora = 8;
    test('um projeto com o total de 104h deve receber uma taxa de 15% referente ao pacote_premium', () =>{
     const listaDeFuncionalidades = ['setup','formulario', 'responsividade','otimizacao_seo', 'construcao_1_pagina','integracao_mailchimp', 'ssr', 'integracao_api_propria'];
     
      expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(1248)
    });
  
    test('um projeto com o total de 72h deve receber a taxa de 12% referente ao pacote_intermediario', () =>{
      const listaDeFuncionalidades = ['setup','otimizacao_seo', 'construcao_1_pagina','integracao_mailchimp', 'ssr','integracao_api_propria'];

      expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(691)
    });
  
    test('um projeto com o total de 24h deve receber a taxa de 10% referente ao pacote_basico', () =>{
      const listaDeFuncionalidades = ['setup', 'construcao_1_pagina', 'ssr'];

      expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(211)
    });
  });