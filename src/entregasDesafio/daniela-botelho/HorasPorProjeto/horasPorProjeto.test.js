
const { calcularHorasDeProjeto } = require("./horasPorProjeto");


describe("Calcular Horas por Projeto", () => {
    
    test("Uma lista contendo 3 funcionalidades tera 24 horas", () => {
       const listaAlgumasFuncionalidades = [ "setup", "construcao_1_pagina", "ssr"]
        expect(calcularHorasDeProjeto(listaAlgumasFuncionalidades)).toBe(24)
       
    })
    
    test("Calcular horas quando não existe funcionalidade", () => {
        const listaInexistente = [ "teste "]
         expect(calcularHorasDeProjeto(listaInexistente)).toBeNaN()  
     })

     test("Verificar se possui todas as funcionalidades", () => {
        const listaTodasFuncionalidades = ["setup","formulario","responsividade",
            "otimizacao_seo", "construcao_1_pagina","integracao_mailchimp",
            "ssr","integracao_api_propria"]
         expect(calcularHorasDeProjeto(listaTodasFuncionalidades)).toBe(104)  
     })


})
