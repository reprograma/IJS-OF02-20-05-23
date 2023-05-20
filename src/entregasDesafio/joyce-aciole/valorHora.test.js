const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")


describe("Calcular valor por hora", () => {
        const salarioMinimo = 1300 ;
        const valorPorHoraCalculado = calcularValorPorHora (salarioMinimo); 
        const valorPorHoraEsperado = 8;
        
    test("Salário minimo 1300 reais", () => {          
        expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado);
    })  

    test("Valor por hora do salário mínimo seja maior que zero", () => {   
        expect(valorPorHoraCalculado).toBeGreaterThan(0);
    })  
})