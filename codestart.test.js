
const testar = require('./codestart')

test("Verificando a funcionalidade obter nome", function () {
    const teste1 = testar.obterNome()
    expect(teste1).toBe("Ana")
})

test("Verificando a funcionalidade somar", function () {
    const teste2 = testar.somar()
    expect(teste2).toBe(8)
})

test("Verificando a funcionalidade multiplicar", function () {
    const teste3 = testar.multiplicar()
expect(teste3).toBe(8)
})

test("Verificando a funcionalidade dividir", function () {
const teste4 = testar.dividir()
expect(teste4).toBe(5)
})

test("Verificando a funcionalidade obter idade", function () {
const teste5 = testar.obterIdade()
expect(teste5).toBe(20) 

})