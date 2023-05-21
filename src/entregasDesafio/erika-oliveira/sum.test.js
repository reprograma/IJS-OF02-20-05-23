const sum = require('./sum');

describe("testing the sum function", () => {
    test("add 1 + 2 and it has to return 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
})

describe("testing broken numbers", () => {
    test("0.5 + 2.5 = 3", () => {
        expect(sum(0.5, 2.5)).toBe(3)
    })
})
