const sum = require("./sum");

describe("Funcionalidade sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 1 + 2 not to be 0", () => {
    expect(sum(1, 2)).not.toBe(0);
  });
});
