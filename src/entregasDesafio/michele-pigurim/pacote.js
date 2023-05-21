const {
  MAX_HORAS_POR_PACOTE,
} = require("../../dominio/calculadora/constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) =>
  Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([key, value]) => value >= totalDeHorasPorProjeto // --> CORREÇÃO: Adicionado operador igual (=) para comparação correta com teto do valor do pacote
  )[0];

exports.calcularPacote = calcularPacote;
