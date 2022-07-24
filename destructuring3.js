function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj)) // buscando número entre 50 e 40
console.log(rand({ min: 955})) // buscando números no mínimo 955
console.log(rand({})) // buscando números entre o max e o min 0-1000
// console.log(rand())