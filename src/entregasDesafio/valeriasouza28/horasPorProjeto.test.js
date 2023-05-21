const {
    calcularHorasDeProjeto
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calcular horas de Projeto", () => {
    test("", () => {
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"];

        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24);
    });

    test("Calcular horas quando não existe funcionalidade", () => {
        const listaDeFuncionalidadesIinexistentes = ["testes"];

        expect(
            calcularHorasDeProjeto(listaDeFuncionalidadesIinexistentes)
        ).toBeNaN();
    });

    test("Todas as funcionalidades retornam 104 horas de projeto", () => {
        const listaTodas = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
        ];
        expect(calcularHorasDeProjeto(listaTodas)).toBe(104);
    });
});
