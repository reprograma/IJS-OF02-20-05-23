const { HORAS_POR_DIA, DIAS_UTEIS_NO_MES } = require("./constantes");

const calcularValorPorHora = rendaMensal => {
    if (typeof rendaMensal !== "number" || rendaMensal <= 0) {
        throw new Error(
            "O salário deve ser um número válido e maior que zero."
        );
    }

    const horasTrabalhadasPorMes = HORAS_POR_DIA * DIAS_UTEIS_NO_MES;
    const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

    return Math.ceil(valorPorHora);
};

try {
    const valorHora = calcularValorPorHora(-1000);
    console.log(valorHora);
} catch (error) {
    console.error(error.message);
}

exports.calcularValorPorHora = calcularValorPorHora;
