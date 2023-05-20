const { calcularPacote } = require("./pacote");

describe("calcular pacote", () => {
  it("pacote para projeto de 40h", () => {
    const pacote = calcularPacote(40);
    expect(pacote).toBe("pacote_basico");
  });

  it("pacote para projeto completo de 104h", () => {
    const pacote = calcularPacote(104);
    expect(pacote).toBe("pacote_premium");
  })
});
