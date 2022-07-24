var numero = 1 // fuja do escopo global
{
    var numero = 2 // está no escopo global mesmo estando no bloco
    console.log("dentro =", numero)
}
console.log("fora = ", numero)