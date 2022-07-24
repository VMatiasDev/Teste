console.log('01)', '1' == 1) // == símbolo de operador relacional que compara a igualdade de 2 coisas
console.log('02)', '1' === 1) // === se são estritamente iguais (tipos iguais)
console.log('03)', '3' != 3) // != se é diferente
console.log('04)', '3' !== 3) // !== se são estritamente diferentes

console.log('05)', 3 < 2) // 3 menor que 2
console.log('06)', 3 > 2) // 3 maior que 2
console.log('07)', 3 <= 2) // 3 menor ou igual a 2
console.log('08)', 3 >= 2) // 3 maior ou igual a 2

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // quando trabalha com variavel de referencia de memoria, não faz diferença se usa == ou ===
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // está comparando um number, então é verdadeiro

console.log('12)', undefined == null)
console.log('13)', undefined === null)

// mais adequado usar === pra não confundir tipos