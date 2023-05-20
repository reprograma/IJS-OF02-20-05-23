const { MAX_HORAS_POR_PACOTE } = require("../../../dominio/calculadora/constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) => 
Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto
)[0];

exports.calcularPacote = calcularPacote;
