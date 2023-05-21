const { calcularPacote } = require("./pacote")

describe("Retornar o pacote conforme o total de horas do projeto", () => {

    test("Retorna o pacote BÁSICO se o total de horas for <= 50", () => {
        const horasProjeto = 49;
        const result = calcularPacote(horasProjeto);
        expect(result).toEqual("pacote_basico");
    });

    test("Retorna o pacote INTERMEDIÁRIO se o total de horas for > 50 && <= 100", () => {
        const horasProjeto = 100;
        const result = calcularPacote(horasProjeto);
        expect(result).toEqual("pacote_intermediario");
    });

    test("Retorna o pacote PREMIUM se o total de horas for > 100 && <= 200", () => {
        const horasProjeto = 200;
        const result = calcularPacote(horasProjeto);
        expect(result).toEqual("pacote_premium");
    });
})