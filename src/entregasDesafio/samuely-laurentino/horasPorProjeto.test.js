const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");
describe("cálculo de horas totais para finalizar um projeto", () => {
  test("dado um array com as funcionalidades desejadas, retornar a soma das horas necessárias", () => {
    const funcionalidades = ["setup", "responsividade"];

    const result = calcularHorasDeProjeto(funcionalidades);
    expect(result).toEqual(24);
  });
});
