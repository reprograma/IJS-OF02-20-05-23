const sum = require('./sum');

describe ("Testando função sum", () => {
test('adds 1 + 2 not equal 3', () => {
    expect(sum(1, 2)).not.toBe(0);
});


test("2+2=4", () => {
    expect(sum(2, 2)).toBe(4);
});
})