const escola = "Cod3r"

console.log(escola.charAt(4)) // Dá a letra que está no índice 4 *Começa do índice 0
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Código relacionado a tabela unicode (html)
console.log(escola.indexOf("3"))

console.log(escola.substring(1)) // Foi a partir do índice 1
console.log(escola.substring(0, 3)) // Foi do índice 0 ao 3 sem incluir o 3

console.log("Escola ".concat(escola).concat("!")) // Concatenar seria juntar
console.log("Escola " + (escola) + ("!"))
console.log(escola.replace(3, "e")) // Trocar o 3 pelo E

console.log("Ana,Maria,Pedro".split(","))