const { calcularPacote } = require("./pacote");

describe("Testar pacotes de acordo com as horas totais do projeto", () => {
  it("deve testar o pacote básico", () => {
    const horasProjeto = 50;
    const result = calcularPacote(horasProjeto);

    expect(result).toEqual("pacote_basico");
  });

  it("deve testar o pacote intermediário", () => {
    const horasProjeto = 100;
    const result = calcularPacote(horasProjeto);

    expect(result).toEqual("pacote_intermediario");
  });

  it("deve testar o pacote premium", () => {
    const horasProjeto = 200;
    const result = calcularPacote(horasProjeto);

    expect(result).toEqual("pacote_premium");
  });
});

describe("Testar a troca de pacotes quando ultrapassa o valor máximo por pacote", () => {
  it("deve testar a troca de pacote básico para intermediário", () => {
    const horasProjeto = 50.1;
    const result = calcularPacote(horasProjeto);

    expect(result).not.toEqual("pacote_basico");
    expect(result).toEqual("pacote_intermediario");
  });

  it("deve testar o pacote intermediário", () => {
    const horasProjeto = 100.1;
    const result = calcularPacote(horasProjeto);

    expect(result).not.toEqual("pacote_intermediario");
    expect(result).toEqual("pacote_premium");
  });
});
