const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

const funcionalidades = ["setup", "responsividade", "construcao_1_pagina"];
const valorHora = 70;

describe("Calcular valor total do projeto", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve retornar o valor total para um projeto básico dadas as funcionalidades", () => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");

    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(2464);
  });

  it("deve retornar o valor total para um projeto intermediário dadas as funcionalidades", () => {
    pacote.calcularPacote.mockReturnValue("pacote_intermediario");

    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(2688);
  });

  it("deve retornar o valor total para um projeto premium dadas as funcionalidades", () => {
    pacote.calcularPacote.mockReturnValue("pacote_premium");

    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(3360);
  });
});
