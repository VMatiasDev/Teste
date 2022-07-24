const a = {name: "Teste"} // constante a não tem o conteúdo do objeto nela. tem um endereço no qual esse objeto está localizado
console.log(a)

const b = a // recebendo o mesmo endereço que foi recebido por a // Atribuição por referência
b.name = "Opa"
console.log(a) // Mudou a partir de B, mas como armazenam o mesmo endereço (local de memória), A também muda

let c = 3
let d = c // Como era um valor primitivo da linguagem, foi feito uma cópia por valor // *Diferente de quando é um objeto
d++
console.log(d)
console.log(c)