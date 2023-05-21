const { calcularValorTotalProjeto } = require("./valorProjeto");

// Será necessário 1 teste para cada Pacote

describe("Calculando Valor Total do Projeto", () => {
  const valorHora = 29;

  test("Pacote Básico", () => {
    const landingPage = [
      "construcao_1_pagina",
      "otimizacao_seo",
      "responsividade",
    ];
    // 40h * 29 = 1160 + 10% = 1276

    const valorFinal = calcularValorTotalProjeto(landingPage, valorHora);

    expect(valorFinal).toEqual(1276);
  });

  test("Pacote Intermediário", () => {
    const site = [
      "responsividade",
      "formulario",
      "construcao_1_pagina",
      "otimizacao_seo",
    ];

    // 56h * 29 = 1624 + 12% = 1819

    const valorFinal = calcularValorTotalProjeto(site, valorHora);

    expect(valorFinal).toEqual(1819);
  });

  test("Pacote Premium", () => {
    const sistemaCompleto = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];

    // 104 * 29 = 3016 * 15% = 3468

    const valorFinal = calcularValorTotalProjeto(sistemaCompleto, valorHora);

    expect(valorFinal).toEqual(3468);
  });
});
