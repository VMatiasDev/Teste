{
    {
        {
            { 
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}

console.log(sera) // Variável var fica visível mesmo fora do bloco que ela foi colocada

function teste() {
    var local = 123 // quando uma variavel é definida dentro de uma função, o escopo dela (campo de "visão") é somente dentro da função
    console.log(local)
}

teste()
console.log(local) // Vai dar erro pq a variavel "local" está dentro da função