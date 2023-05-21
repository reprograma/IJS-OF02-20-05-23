const { MAX_HORAS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto)[0];
   // alterado (>=) pra comparação se adequar ao solicitado no projeto

exports.calcularPacote = calcularPacote;