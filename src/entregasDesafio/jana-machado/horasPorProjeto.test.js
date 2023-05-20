const { calcularHorasDeProjeto} = require("./horasPorProjeto")

describe("Calcular Horas do Projeto", () => {
    test("Se a lista contendo 3 funcionalidades terá 24 horas", () =>{
        const listaFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]

        expect(calcularHorasDeProjeto(listaFuncionalidades)).toBe(24)
    })

    test("Calcular horas quando não existe a funcionalidade", ()=>{
        const listaFuncionalidadesInexistente = ["testes"]
        expect(calcularHorasDeProjeto(listaFuncionalidadesInexistente)).toBeNaN()
    })
})

test("Calcular Todas as funcionalidades retornaora 104 horas", ()=>{
    const listaTodas = [
        "setup",
        "formulario",
        "responsividade",
        "otimizacao_seo",
        "construcao_1_pagina",
        "integracao_mailchimp",
        "ssr",
        "integracao_api_propria"
    ]
     expect(calcularHorasDeProjeto(listaTodas)).toBe(104)
})