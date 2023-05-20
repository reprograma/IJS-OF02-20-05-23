const {
    HORAS_POR_DIA,
    DIAS_UTEIS_NO_MES
} = require("./valeriasouza28/calculadora/constantes/constantes");

const calcularValorPorHora = rendaMensal => {
    const horasTrabalhadasPorMes = HORAS_POR_DIA * DIAS_UTEIS_NO_MES;
    const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

    return Math.ceil(valorPorHora);
};

exports.calcularValorPorHora = calcularValorPorHora;
