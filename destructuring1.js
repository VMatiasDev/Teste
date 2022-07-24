// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // estou tirando de dentro do objeto "pessoa" o nome e a idade
console.log(nome, idade)

const {nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

// const { conta: { ag, num } } = pessoa // da erro pq não existe conta. o único que pode dar undefined é o dado interno
// console.log(ag, num)