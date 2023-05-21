const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");

const valorHora = 8;

describe("Calcular valor projeto", () => {
  test("Um projeto com todas as funcionalidades e valor hora de 8 reais, considerando taxa de 15%, deve retornar valor total do projeto de 957 reais", () => {
    const funcionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];

    const valorDoProjeto = 957;

    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(
      valorDoProjeto
    );
  });

  test("Um projeto com as funcionalidades setup e formulário, com valor hora de 8 reais, onsiderando taxa de 10%, deve retornar valor total do projeto de 211 reais", () => {
    const funcionalidades = ["setup", "formulario"];

    const valorDoProjeto = 211;

    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(
      valorDoProjeto
    );
  });

  test("Um projeto com as funcionalidades setup e formulário, com valor hora de 8 reais, onsiderando taxa de 12%, deve retornar valor total do projeto de 502 reais", () => {
    const funcionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "integracao_api_propria",
    ];

    const valorDoProjeto = 502;

    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(
      valorDoProjeto
    );
  });
});
