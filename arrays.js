const valores = [7.7, 8.9, 6.3, 9.2] // Par de colchete define array
console.log(valores[0], valores[3])
console.log(valores[4]) // Não dá erro em js, só da "undefined"

valores [4] = 10
// valores [10] = 8 // vai contar x elementos vazios
console.log(valores)
console.log(valores.length) // Dizer quantos elementos tem no array

valores.push({id: 3}, false, null, "teste") // Evitar misturar tipos diferentes num único array
console.log(valores)

console.log(valores.pop()) // Tirar último valor do array e retira do array
delete valores[0] // Retirar o índice 0 do array
console.log(valores)

console.log(typeof valores)

// Array é dinâmico. Cresce ou diminui a medida que vai colocando ou tirando valores

console.log("Qualquer coisa!")