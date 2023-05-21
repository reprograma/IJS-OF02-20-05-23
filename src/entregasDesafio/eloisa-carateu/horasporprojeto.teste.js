const {calcularHorasDeProjeto} = require ("../../dominio/calculadora/Projeto/horasPorProjeto")

describe ("Calcular Horas por Projeto", ()=> {

const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]

expect (calcularHorasDeProjeto (listaDeFuncionalidades)).toBe (24)
})

test ("Calcular horas quando não existe a funcionalidade", () => {

    const listaDeFuncionalidadesInexistente = ["teste"]

    expect (calcularHorasDeProjeto(listaDeFuncionalidadesInexistente).toBeNaN())

})
