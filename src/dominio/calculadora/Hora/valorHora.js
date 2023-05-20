const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

// a função recebe como parâmetro a renda mensal
const calcularValorPorHora = (rendaMensal) => {
  const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES); 
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

  return Math.ceil(valorPorHora); // o método do Math tá usando o ceil pra arredondar pra cima (pra arredondar pra baixo usar o floor)
};

exports.calcularValorPorHora = calcularValorPorHora; // exports como um objeto, então quando for chamar no outro arquivo com o require tem que usar as chaves lá
