const { calcularHorasDeProjeto} = require("./horasPorProjeto")

describe("Calcular Horas do Projeto", () => {
    test("Projeto Com 1 Funcionalidade Terá 8 Horas", ()=>{
        const listaFuncionalidades = ["setup"]

        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(8)
    })

    test("Projeto Com 2 Funcionalidades Terá 24 Horas", ()=>{
        const listaFuncionalidades = ["setup", "formulario"]

        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(24)
    })

    test("Projeto Com 3 Funcionalidades Terá 40 horas", () =>{
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade"
        ]

        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(40)
    })

    test("Projeto Com 4 Funcionalidades Terá 56 horas", () =>{
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo"
        ]

        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(56)
    })

    test("Projeto Com 5 Funcionalidades Terá 64 horas", () =>{
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina"
        ]

        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(64)
    })

    test("Projeto Com 6 Funcionalidades Terá 80 horas", () =>{
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp"
        ]

        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(80)
    })

    test("Projeto Com 7 Funcionalidades Terá 88 horas", () =>{
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr"
        ]

        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(88)
    })
    
    test("Projeto com Todas as Funcionalidades Terá 104 Horas", ()=>{
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
        ]
        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(104)
    })
    
        test("Calcular horas quando não existe a funcionalidade", ()=>{
            const listaFuncionalidadesInexistente = ["testes"]
            expect(calcularHorasDeProjeto(listaFuncionalidadesInexistente)).toBeNaN()
        })
})
