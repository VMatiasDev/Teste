let valor // não inicializada
console.log(valor) // declarado mas não inicializado é undefined
// console.log(valor2) // não declarado da erro

valor = null // ausência de valor
console.log(valor) // usar null em vez de undefined quando quiser zerar o valor de uma variavel
// console.log(valor.toString()) // cuidado pra não acessar variaveis que estão nulas ou undefined

const produto = {}
console.log(produto.preco) // dá undefined porque ainda não foi definido o preço ainda
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // se quiser tirar um atributo do objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)