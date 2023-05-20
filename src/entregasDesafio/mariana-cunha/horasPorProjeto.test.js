const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("calcularHorasDeProjeto", () => {
  const listaDeFuncionalidades = [
    "formulario",
    "construcao_1_pagina",
    "integracao_api_propria",
  ];

  const todasFuncionalidades = [
    "setup",
    "formulario",
    "responsividade",
    "otimizacao_seo",
    "construcao_1_pagina",
    "integracao_mailchimp",
    "ssr",
    "integracao_api_propria"
  ]

  it("se a lista com 3 funcionalidades terá 40 horas", () => {
    expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(40)
  })

  it("calcular horas de uma funcionalidade que não existe", () => {
    const listaFuncionalidadeInexistente = ["testes"]

    expect(calcularHorasDeProjeto(listaFuncionalidadeInexistente)).toBeNaN()
  })

  it("todas as funcionalidades duram 104h de projeto", () => {
    expect(calcularHorasDeProjeto(todasFuncionalidades)).toBe(104)
  })

});