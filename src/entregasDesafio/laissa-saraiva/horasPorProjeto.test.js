const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calculando as horas de Projeto", () => {
  test("Se a lista com 3 funcionalidades retorna 24 horas", () => {
    // Array com 3 funcionalidades
    const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"];

    expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24);
  });

  test("Se a lista dessas funcionalidades retorna 32 horas", () => {
    const listaDeFuncionalidades1 = ["responsividade", "integracao_mailchimp"];
    expect(calcularHorasDeProjeto(listaDeFuncionalidades1)).toBe(32);
  });

  test("Se a funcionalidade não existe retorna NaN", () => {
    const listaDeFuncionalidadesInexistente = ["testes"];

    // Matchers - TobeNaN()
    expect(calcularHorasDeProjeto(listaDeFuncionalidadesInexistente)).toBeNaN();
  });

  test("Se total de horas trabalhadas em todas as funcionalidades retorna 104 horas", () => {
    const listaTodas = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];
    expect(calcularHorasDeProjeto(listaTodas)).toBe(104);
  });
});
