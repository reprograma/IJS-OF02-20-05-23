const { calcularHorasDeProjeto } = require("./horasPorProjeto")

describe("Calculando o total de horas do projeto conforme as funcionalidades", () => {

   test("Dado um array com as funcionalidades: 'setup', 'formulario' e 'srr', retorna 32 horas", () => {
      const listaDeFuncionalidades = ["setup", "formulario", "ssr"];
      expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(32);
   })

   test("Testando calcular quando não existir a funcionalidade", () => {
      const funcionalidadeInexistente = ["inexistente"]
      expect(calcularHorasDeProjeto(funcionalidadeInexistente)).toBeNaN();
   })

   test("O cálculo de horas de projetos com todas as funcionalidades retorna o total de 104 horas", () => {
      const listaTodas = [
         "setup",
         "formulario",
         "responsividade",
         "otimizacao_seo",
         "construcao_1_pagina",
         "integracao_mailchimp",
         "ssr",
         "integracao_api_propria"
      ]
      expect(calcularHorasDeProjeto(listaTodas)).toBe(104)
   })
})