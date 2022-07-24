let num1 = 1
let num2 = 2

num1++ // forma pós fixada - acrescenta 1 unidade ao valor da variavel
console.log(num1)
--num1 // forma pré fixada (tem prioridade maior que a forma pós fixada) - reduz 1 unidade ao valor da variavel
console.log(num1)

console.log(++num1 === num2--) // primeiro adicionar ao num1, depois compara, depois subtrai de num2 (por ordem de prioridade)
console.log(num1 === num2)