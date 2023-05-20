const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");
const { calcularPacote } = require("./pacote");

describe("calcular valor total do projeto", () => {
  it("calcular valor de projeto 40h", () => {
    const totalDeHoras = 40;
    const valorMensal = 4000;
    const listaDeFuncionalidades = [
      "responsividade",
      "construcao_1_pagina",
      "integracao_api_propria",
    ];

    let valorHora = calcularValorPorHora(valorMensal);
    expect(valorHora).toBe(23);

    let horasDeProjeto = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect(horasDeProjeto).toBe(40);

    let calcularValorPacote = calcularPacote(totalDeHoras);
    expect(calcularValorPacote).toBe("pacote_basico");

    let valorTotalDoProjeto = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
    expect(valorTotalDoProjeto).toBe(1012)
  });
});
