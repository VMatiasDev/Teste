console.log(typeof Object)
console.log(typeof new Object) // Pode instanciar uma função pra transformar em Object

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente) // Pode instanciar a partir de uma const criada

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto) // Pode instanciar a partir de uma classe