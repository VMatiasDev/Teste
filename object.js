const prod1 = {} // Par de chaves define objeto
prod1.nome = "Celular Ultra Mega" // Pode criar o objeto vazio e ir adicionando depois
prod1.preco = 4998.90
prod1["Desconto Legal"] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
}

prod2["Desconto Legal"] = 0.40 // Evitar atributos com espaço

console.log(prod2)