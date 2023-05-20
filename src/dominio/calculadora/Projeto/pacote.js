const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) => {
  for (const [pacote, limite] of Object.entries(MAX_HORAS_POR_PACOTE)) {
    if (totalDeHorasPorProjeto <= limite) {
      return pacote;
    }
  }
  return "Não há pacotes disponíveis";
};

exports.calcularPacote = calcularPacote;
