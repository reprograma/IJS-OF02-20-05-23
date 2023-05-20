const sum = require('./sum')

test("adicionando 1 + 2 e e não tem que retornar 0", () => {
    expect(sum(1, 2)).not.toBe(0)
    }) 

test("1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3)
})

