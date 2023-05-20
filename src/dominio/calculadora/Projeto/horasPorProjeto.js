const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func]) // vai funcionalidade por funcionalidade buscando esse HORAS
    .reduce((sum, currentValue) => sum + currentValue, 0) // vai somar o valor atual com a soma acumulada
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
