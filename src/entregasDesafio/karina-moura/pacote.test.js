const { calcularPacote } = require("./pacote");

describe("Calcular pacote", () => {
  test("Projeto de 40 horas deve retornar pacote basico", () => {
    const horasDeProjeto = 40;
    expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico");
  });

  test("Projeto de 70 horas deve retornar pacote intermediario", () => {
    const horasDeProjeto = 70;
    expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario");
  });

  test("Projeto de 104 horas deve retornar pacote premium", () => {
    const horasDeProjeto = 104;
    expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium");
  });
});
