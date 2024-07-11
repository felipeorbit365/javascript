// Módulo F - Aula 16 (Funções)
function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'ímpar!'
    }
}

console.log(parimpar(223)) // Faz a impressão do retorno da função diretamente
console.log('---')
let resultado = parimpar(12) // A varíavel resultado recebe o valor 'Par!' através do return
console.log(resultado) // Faz a impressão do valor da variável 