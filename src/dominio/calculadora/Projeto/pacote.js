const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto
)[0];

const totalDeHorasPorProjeto = 50;
const pacote = calcularPacote(totalDeHorasPorProjeto);
console.log(pacote);

exports.calcularPacote = calcularPacote;
