function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || símbolo de "OU"
    const comprarTV50 = trabalho1 && trabalho2 // && símbolo de "e"
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // != simula um xor (ou exclusivo)
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTV50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))