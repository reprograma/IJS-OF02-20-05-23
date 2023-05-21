const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe("Calcular Horas de projeto", () => {
    test("Se a lista contém 3 funcionalidades terá 40 horas", ()=> {
        const listaDeFuncionalidades = ["setup", "formulario", "responsividade"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(40)
    })

    test("Calcular horas quando não existe a funcionalidade", () => {
        const listaDeFuncionalidadesInexistente = ["testes"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidadesInexistente)).toBeNaN()

    })

    test("Se a lista contém todas as funcionalidades terá 104 horas",() =>{
        const listaTodas = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
          ]
        expect(calcularHorasDeProjeto(listaTodas)).toBe(104)

    })

    
})