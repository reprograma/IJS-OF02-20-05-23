const {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")


describe("Calcular Horas de Projeto", () => {
  test("Se a lista contendo 3 funcionalidades terá X horas", () => {
    const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]
    expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
  })

  test("Calcular horas quando não existe a funcionalidade", () => {
    const listaDeFuncionalidadeInexistente = ["testes"]
    expect(calcularHorasDeProjeto(listaDeFuncionalidadeInexistente)).toBeNaN()
  }) 

  test("Todas as funcionalidades retornam 104 horas de projeto", () => {
    const listaTodasFuncionalidades = [
        "setup",
        "formulario",
        "responsividade",
        "otimizacao_seo",
        "construcao_1_pagina",
        "integracao_mailchimp",
        "ssr",
        "integracao_api_propria"
    ]
    expect(calcularHorasDeProjeto(listaTodasFuncionalidades)).toBe(104)
  })
})