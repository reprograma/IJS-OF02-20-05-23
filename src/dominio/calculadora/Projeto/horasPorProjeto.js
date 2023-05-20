const { HORAS_POR_FUNCIONALIDADE } = require('../../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, 0)
);

const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"];
const horasDeProjeto = calcularHorasDeProjeto(listaDeFuncionalidades);

console.log(`Total de horas do projeto: ${horasDeProjeto}`);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;

//const listaDeFuncionalidades = [HORAS_POR_FUNCIONALIDADE];
//const horasPorProjeto = calcularHorasDeProjeto(listaDeFuncionalidades).parseInt()
//console.log(calcularHorasDeProjeto);
