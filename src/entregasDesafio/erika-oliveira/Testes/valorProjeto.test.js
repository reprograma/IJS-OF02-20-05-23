const { calcularValorTotalProjeto } = require('../Projeto/valorProjeto');

const valorDaHora = 8;

  // Teste para projetos do Pacote Básico (até 50h)
describe("Calcular valor total do Projeto", () => {
  test("Projeto com 40h deve retornar Pacote Básico [taxa 1.1 (10%)]", () => {
    const horasPorFuncionalidade = ["setup", "formulario", "responsividade"]

    expect(calcularValorTotalProjeto(valorDaHora, horasPorFuncionalidade)).toBe(352)
  });

  // Teste para projetos do Pacote Intermediário (até 100h)
  test("Projeto com 80h deve retornar Pacote Intermediário [taxa 1.12 (12%)]", () => {
    const horasPorFuncionalidade = [
      "setup", 
      "formulario", 
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
    ]

    expect(calcularValorTotalProjeto(valorDaHora, horasPorFuncionalidade)).toBe(717)

  })

  // Teste para projetos do Pacote Premium (até 200h)
  test("Projeto com mais de 100h deve retornar Pacote Premium [taxa 1.15 (15%)]", () => {
    const horasPorFuncionalidade = [ 
    "setup",
    "formulario",
    "responsividade",
    "otimizacao_seo",
    "construcao_1_pagina",
    "integracao_mailchimp",
    "ssr",
    "integracao_api_propria",
    ]

    expect(calcularValorTotalProjeto(valorDaHora, horasPorFuncionalidade)).toBe(957)
  });
});
