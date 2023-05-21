const { calcularPacote } = require('../erika-oliveira/Pacote/pacote');

describe("Calcular pacote", () => {
  test("Deve retornar pacote básico", () => {
    const horasDeProjeto = 50

    expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico")
  });

  test("Projeto a partir de 60h deve retornar pacote intermediário", () => {
    const horasDeProjeto = 60

    expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario")
  });

  test("Calcular porojeto de 104 deve retornar pacote_premium", () =>{
    const horasDeProjeto = 104

    expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium")
  });
});