const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const { calcu } = require("../../dominio/calculadora/Projeto/pacote")

describe("Cálculo do valor total de um projeto", () => {


    test("Cálculo total de horas do projeto I", () => {

        const funcionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo"];
        const valorHora = 8;
        const pacote_premium = 200

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBeGreaterThan(pacote_premium)
    })

    test("A taxa contratual desse projeto é de 10%", () => {

        const funcionalidades = [
            "setup",
            "otimizacao_seo"
        ];
        const valorHora = 8;
        ceilPacoteBasico = 440
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBeLessThanOrEqual(ceilPacoteBasico)
    })

})