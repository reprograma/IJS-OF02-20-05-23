const { calcularValorTotalProjeto } = require('../deborah-gomes/valorProjeto')
  
  describe('calcularValorTotalProjeto', () => {
    test('calcula o valor total do projeto', () => {
      
      const funcionalidades = ["setup", "construcao_1_pagina", "ssr"];
      const valorHora = 8;
      const ValorTotalProjeto = funcionalidades * valorHora;
  
      expect(calcularValorTotalProjeto(ValorTotalProjeto)).toBe("172")
    });
  
  });