const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calcula as horas necessárias para finalizar um projeto", () => {
  it("deve retornar a soma de horas necessárias de acordo com o array de funcionalidades desejadas", () => {
    const funcionalidades = ["setup", "responsividade", "construcao_1_pagina"];

    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(32);
  });

  it("retornar NaN pra quando não existe a funcionalidade", () => {
    const novaFuncionalidade = ["testes"];
    expect(calcularHorasDeProjeto(novaFuncionalidade)).toBeNaN();
  });
});
