const sum = require("./sum");

describe("Testando a função sum", () => {
  test("não retorna 0 quando soma 1 e 2", () => {
    expect(sum(1, 2)).not.toBe(0);
  });

  test("1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
