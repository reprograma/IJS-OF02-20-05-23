const { calcularValorTotalProjeto } = require("./valorProjeto");

describe("Deve retornar valor total de 616 para um projeto pacote básico com valor hora = 35", () => {
  const valorHora = 35;

  test("Calcula o valor total para um projeto básico", () => {
    const listaDeFuncionalidades = ["integracao_api_propria"];
    expect(
      calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
    ).toEqual(616);
  });
  test("Deve retornar valor total de 2688 para um projeto pacote intermediario com valor hora = 35", () => {
    const listaDeFuncionalidades = [
      "setup",
      "integracao_api_propria",
      "construcao_1_pagina",
      "responsividade",
      "integracao_mailchimp",
    ];

    expect(
      calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
    ).toEqual(2688);
  });
  test("Deve retornar valor total de 5460 para um projeto pacote premium com valor hora = 35", () => {
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
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(
      5460
    );
  });
});
