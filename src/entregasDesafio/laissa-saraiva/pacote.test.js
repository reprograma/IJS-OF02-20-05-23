const { calcularPacote } = require("./pacote");

describe("Calcular Pacotes", () => {
  test("Um projeto de 35 horas, deve retornar *Pacote Básico*", () => {
    const horasDeProjeto = 35;
    expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico");
  });

  test("Um projeto de 50 horas, deve retornar *Pacote Básico*", () => {
    const horasDeProjeto = 50;
    expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico");
  });

  test("Um projeto de 65 horas, deve retornar *Pacote Intermediário*", () => {
    const horasDeProjeto = 65;
    expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario");
  });

  test("Um projeto de 100 horas, deve retornar *Pacote Intermediário*", () => {
    const horasDeProjeto = 100;
    expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario");
  });

  test("Um projeto de 104 horas, deve retornar *Pacote Premium*", () => {
    const horasDeProjeto = 104;
    expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium");
  });

  test("Um projeto de 200 horas, deve retornar *Pacote Premium*", () => {
    const horasDeProjeto = 200;
    expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium");
  });
});
