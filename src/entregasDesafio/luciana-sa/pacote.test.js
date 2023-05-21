const {calcularPacote} = require("./pacote")
test ("Um projeto acima de 100hrs e abaixo de 200hrs deve retornar pacote_premium", ()=> {
    const horasProjeto = 104 
    expect(calcularPacote(horasProjeto)).toBe("pacote_premium")
})
test ("Um projeto de com até 50 horas deve retornar pacote_basico", ()=> {
    const horasProjeto = 48
    expect(calcularPacote(horasProjeto)).toBe("pacote_basico")
})

