const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto //alterado function para corrigir comparativo >= 50 e adequar regras de negócio
)[0];

exports.calcularPacote = calcularPacote;
