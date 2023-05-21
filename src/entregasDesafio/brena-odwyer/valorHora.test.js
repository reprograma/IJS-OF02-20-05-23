const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora") // tem que usar essas chaves pq lá na pasta onde está o exports está como objeto

describe('Calcular Valor por hora', () => {
    const salarioMinimo = 1300
    const valorPorHoraReal = calcularValorPorHora(salarioMinimo) // criamos essa constante pq vamos passar o calcularValorPorHora(1300) em vários expects a seguir
    
    test('Valor por hora de um salário mínimo de 1300 reais deve ser 8 reais/hora', () => {
        const valorPorHoraEsperado = 8
        expect(valorPorHoraReal).toBe(valorPorHoraEsperado) // recebendo 1330 reais por mês, traba;hando 8h por dia, 22 dias no mês, sua hora é 8
        
    })

    test('Valor por hora do salário mínimo seja maior que 0', () => {
        const zero = 0
        expect(valorPorHoraReal).toBeGreaterThan(zero) // o expect tem vários desses matches "toBe" "toBeGreaterThan"
    })
})