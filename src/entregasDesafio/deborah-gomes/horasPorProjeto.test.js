const { calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe ("Calcular horas de projeto", () => {
    test("Se a lista contendo 3 funcionalidades terá X horas", () => {
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]
        
        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    });

    test("Calcular horas quando não existe a funcionalidade", () => {
        const listaDeFuncionalidadeInexistente = ["testes"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidadeInexistente)).toBeNaN();
    });

    test("Se a lista tiver todas as funcionalidades terá X horas", () => {
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]
        
        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    });
})