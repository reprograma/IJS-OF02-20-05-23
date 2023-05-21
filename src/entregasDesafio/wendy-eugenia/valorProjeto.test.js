const { calcularValorTotalProjeto } = require ('../../dominio/calculadora/Projeto/valorProjeto')

describe ('Calculando o valor total', () =>{
    const listaDeFuncionalidades = ['ssr,','formulario', 'setup']
    const valorHora = 8
    test('Teste ', () => { 
        expect( calcularValorTotalProjeto(listaDeFuncionalidades,valorHora)).toBe()        
    })
    test('Testando calculo de hora 8 e 3 funcionalidades', () => {
        expect (calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe()
    })
})