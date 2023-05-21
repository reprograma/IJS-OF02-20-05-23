const sum = require("./sum");

// describe seria o título do livro e test seria capa capítulo

describe("Testando a função sum", () => {
  // test() é uma função do jest. Ela recebe 2 parâmetros: 1 string e 1 função de callback
  test("adicionando 1 + 2 e não tem que retornar 0", () => {
    expect(sum(1, 2)).not.toBe(0); // expect também é do jest
  });

  test("2 + 2 = 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
});

// describe("Testando números quebrados", test("0.5 + 2.5 = 0", () => {
//   expect(sum(0.5, 2.5)).toBe(0);
// });
