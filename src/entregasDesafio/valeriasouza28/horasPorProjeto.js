const { HORAS_POR_FUNCIONALIDADE } = require("../constantes/constantes");

const calcularHorasDeProjeto = listaDeFuncionalidades => {
    const horasFuncionalidades = listaDeFuncionalidades.map(
        func => HORAS_POR_FUNCIONALIDADE[func]
    );

    if (horasFuncionalidades.includes(undefined)) {
        throw new Error("Uma ou mais funcionalidades são inválidas.");
    }

    return horasFuncionalidades.reduce(
        (sum, currentValue) => sum + currentValue,
        0
    );
};

try {
    const horasProjeto = calcularHorasDeProjeto([
        "setup",
        "construcao_1_pagina",
        "ssr",
        "otimizacao_seo",
        "responsividade",
        "formulario"
    ]);

    console.log(horasProjeto);
} catch (error) {
    console.error(error.message);
}

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
