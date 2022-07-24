// par nome/valor
const saudacao = "Opa" // contexto léxico 1 (local em que local físico do código foi definido)

function exec() {
    const saudacao ="Falaaa" // contexto léxico 2. Então consegue usar o mesmo identificador com outro resultado sem dar erro
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)