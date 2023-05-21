const { calcularValorTotalProjeto } = require('../erika-oliveira/Projeto/valorProjeto');

const valorDaHora = 8;

// Teste para projetos do Pacote Básico (até 50h)
describe("Calcular valor total do Projeto", () => {
  test("Projeto com 40h deve retornar pacote básico [taxa 1.1 (10%)]", () => {
    const horasPorFuncionalidade = ["setup", "formulario", "responsividade"]

    expect(calcularValorTotalProjeto(valorDaHora, horasPorFuncionalidade)).toBe("pacote_basico")
  });

  /* test("Projeto com 80h deve retornar pacote intermediário [taxa 1.12 (12%)]", () => {
    const horasPorFuncionalidade = ["setup", "formulario", "responsividade"
      otimizacao_seo: 16,
      construcao_1_pagina: 8,
      integracao_mailchimp: 16,]

  }) */

// Teste para projetos do Pacote Intermediário (até 100h)



})