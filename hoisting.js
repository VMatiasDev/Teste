console.log("a =", a)
var a = 2 // Foi como se tivesse declarado var = a sem atribuir valor, então no primeiro console.log ele fica undefined
console.log("a =", a)

console.log("b =", b)
let b = 2 // Não existe hoisting com let. Então dá erro
console.log("b =", b)