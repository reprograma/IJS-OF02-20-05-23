const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Calcular Valor por Hora', () =>{
    test('Salário mínimo de 1300 reais', () => {
        const valorPorHoraCalculado = calcularValorPorHora(1300)
        const valorPorHoraEsperado = 8
        expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado)
    });

    test('Valor por hora não pode ser menor que zero', () => {
        const zero = 0
        const valorPorHoraCalculado = calcularValorPorHora(1300)
        expect(valorPorHoraCalculado).toBeGreaterThan(0)
    })
})