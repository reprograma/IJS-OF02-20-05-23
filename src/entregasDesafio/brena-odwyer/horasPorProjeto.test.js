const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calcular Horas de projeto', () => {
    test('Se a lista contendo três funcionalidades terá 24 horas', () => {
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"] // somando as horas lá na constante dá 24

        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    })

    test('Calcular horas quando não existe a funcionalidade', () => {
        const listaFuncionalidadeInexistente = ["testes"]
        expect(calcularHorasDeProjeto(listaFuncionalidadeInexistente)).toBeNaN()

    })
})