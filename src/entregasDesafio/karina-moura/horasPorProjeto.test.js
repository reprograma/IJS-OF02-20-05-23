const { calcularHorasDeProjeto } = require("./horasPorProjeto");

describe("Calcular horas do projeto", () => {
  test("Se a lista contendo 3 funcionalidades terá 24 horas", () => {
    const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"];
    expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24);
  });

  test("Funcionalidade não existente", () => {
    const listaDeFuncionalidades = ["API"];
    expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBeNaN();
  });

  test("Todas as funcionalidades retornam 104 horas de projeto", () => {
    const listaDeFuncionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];
    expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(104);
  });

  test("Deve retornar 0 quando o input for uma lista vazia", () => {
    expect(calcularHorasDeProjeto([])).toBe(0);
  });
});
