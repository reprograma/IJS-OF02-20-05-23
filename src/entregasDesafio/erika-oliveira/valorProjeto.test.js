const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

const valorDaHora = 8;

// Teste para projetos do Pacote Básico (até 50h)
describe("Calcular valor total do Projeto", () => {
  test("Projeto com 40h deve retornar pacote básico [taxa 1.1 (10%)]", () => {
    const funcionalidades = ["setup", "formulario", "responsividade"]

    expect(calcularValorTotalProjeto(valorDaHora, funcionalidades)).toBe("pacote_basico")
  });
});
