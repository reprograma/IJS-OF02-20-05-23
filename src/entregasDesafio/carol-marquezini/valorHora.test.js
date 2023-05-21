const { calcularValorPorHora } = require("./valorHora")

describe("Calcular valor por hora", () => {

    test("Salário minimo de 1300 reais",()=>{

        const valorPorHoraCalculado = calcularValorPorHora(1300)
        const valorPorHoraEsperado = 8
        const zero = 0

        expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado)

    })

    test("", () => {

    })

})