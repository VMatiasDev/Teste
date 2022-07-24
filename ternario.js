const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // operador ternário - 1ª parte é o relacional (nota >= 7), 2ª parte é o aprovado e 3ª é o reprovado

console.log(resultado(7.1))
console.log(resultado(6.7))