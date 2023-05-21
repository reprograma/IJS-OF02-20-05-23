const { MAX_HORAS_POR_PACOTE } = require('../../../dominio/calculadora/constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto // inserção do "=" p pegar o pacote básico
)[0];

exports.calcularPacote = calcularPacote;
