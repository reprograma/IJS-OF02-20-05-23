const { TAXAS_CONTRATUAIS_POR_PACOTE} = require('../../dominio/calculadora/constantes/constantes')
const { calcularHorasDeProjeto} = require("..dominio/calculadora/Projeto/horasPorProjeto")
const { calcularPacote } = require('../dominio/calculadora/Projeto/pacote')

const funcionalidades = ["setup", "construcao_1_pagina", "ssr"];
const valorHora = 8;

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
  return totalDeHorasPorProjeto * valorHora;
};

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
  const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
  
  const pacote = calcularPacote(totalDeHorasPorProjeto);

  const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

  return Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]);
}


const valorTotalProjeto = calcularValorTotalProjeto(funcionalidades, valorHora);

console.log(`Valor total do projeto: $${valorTotalProjeto}`);

exports.calcularValorTotalProjeto = calcularValorTotalProjeto;