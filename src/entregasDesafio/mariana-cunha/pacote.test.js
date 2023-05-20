// const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');
const { calcularPacote } = require("./pacote");
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto");

// jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("calcular pacote", () => {
  // it("pacote para projeto de 64h", () => {
  //   horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64);
  //   const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto();

  //   const pacote = calcularPacote(horasDeProjeto);

  //   expect(pacote).toBe("pacote_intermediario");
  // });

  it("pacote para projeto de 40h", () => {
    const pacote = calcularPacote(40);
    expect(pacote).toBe("pacote_basico");
  });

  it("pacote para projeto completo de 104h", () => {
    const pacote = calcularPacote(104);
    expect(pacote).toBe("pacote_premium");
  })
});
