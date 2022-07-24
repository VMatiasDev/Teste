var numero = 1
{
    let numero = 2 // let é visível primeiro dentro do bloco (escopo menor)
    console.log("Dentro =", numero)
}
console.log("Fora =", numero)