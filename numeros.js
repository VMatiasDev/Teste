const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Saber se é um valor inteiro. 1.0 considera inteiro, mas 1.1 considera real
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed pra dizer quantas casas decimais imprimir
console.log(media.toString(2)) // Transformar em string (Se colocar 2 entra como valor binário)
console.log(typeof media)
console.log(typeof Number)