function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // retornar entre 50 e 40
console.log(rand([992])) // passou só o primeiro (min) então vai retornar o maiores que 992
console.log(rand([, 10])) // passou só o segundo (max) então vai retornar no máximo 10
console.log(rand([])) // retorna entre 0 - 1000
//console.log(rand())