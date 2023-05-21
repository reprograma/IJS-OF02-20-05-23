const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote.js");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Testando o valor do projeto de acordo com o pacote", () => {
    const valorHora = 8;
    const funcionalidades = [
                "setup", 
                "formulario", 
                "ssr",
            ];

    describe("Testando o pacote BÁSICO", () => {
        beforeEach(() => {
            pacote.calcularPacote.mockReturnValue("pacote_basico");
        });
        test("Retorna o valor total do projeto", () => {
            const result = calcularValorTotalProjeto(funcionalidades, valorHora);
            expect(result).toEqual(282);
        });
    });

    describe("Testando o pacote INTERMEDIÁRIO", () => {
        beforeEach(() => {
            pacote.calcularPacote.mockReturnValue("pacote_intermediario");
        });
        test("Retorna o valor total do projeto", () => {
            const result = calcularValorTotalProjeto(funcionalidades, valorHora);
            expect(result).toEqual(307);
        });
    });

    describe("Testando o pacote PREMIUM", () => {
        beforeEach(() => {
            pacote.calcularPacote.mockReturnValue("pacote_premium");
        });
        test("Retorna o valor total do projeto", () => {
            const result = calcularValorTotalProjeto(funcionalidades, valorHora);
            expect(result).toEqual(384);
        });
    });

});