const {calcularHorasDeProjeto} = require('../erika-oliveira/Projeto/horasPorProjeto');

describe("Calcular Horas de projeto", () => {
  test("Testar se a lista contendo 03 funcionalidades terá 24 horas", () => {
    const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr", ]

    expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24);
  
  })

  test("Calcular horas quando não existe a funcionalidade", () => {
    const listaDeFuncionalidadesInexistentes = ["testes"]

    expect(calcularHorasDeProjeto(listaDeFuncionalidadesInexistentes)).toBeNaN()
  })

  test("Todas as funcionalidades retornam 104 horas de projeto", () => {
    const listaTodas = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ]

    expect(calcularHorasDeProjeto(listaTodas)).toBe(104)
  })
})
