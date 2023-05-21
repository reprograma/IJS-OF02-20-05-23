const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../../../dominio/calculadora/constantes/constantes')
const { calcularHorasDeProjeto } = require('../../erika-oliveira/Projeto/horasPorProjeto');
const { calcularPacote } = require('../../erika-oliveira/Pacote/pacote');

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
  return totalDeHorasPorProjeto * valorHora;
};

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
  const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
  
  const pacote = calcularPacote(totalDeHorasPorProjeto);

  const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

  return Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]);
}

exports.calcularValorTotalProjeto = calcularValorTotalProjeto;
