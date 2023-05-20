const { HORAS_POR_FUNCIONALIDADE } = require("../../../dominio/calculadora/constantes/constantes");


const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, 0)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
