
const sum = require('./sum')

test("adicionando 1+2 e tem que retornar 0", () => {
    expect(sum(1, 2)).not.toBe(0)
})

test("2+2 = 4", () => {
    expect(sum(2,2)).toBe(4)
})