const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")


describe("Calcular valor por hora", () => {
    test("Salário minimo 1300 reais", () => {  
        const salarioMinimo = 1300 ;
        const valorPorHoraCalculado = calcularValorPorHora (salarioMinimo); 
        const valorPorHoraEsperado = 8;
        
        expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado);
    })  

    test("Valor por hora do salário mínimo seja maior que zero", () => {   
        const zero = 0;
        
        expect(valorPorHoraCalculado).toBeGreaterThan(zero);
    })  
})