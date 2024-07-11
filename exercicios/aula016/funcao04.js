// Módulo F - Aula 16 (Funções)
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    } 
    return fat
}

console.log(fatorial(5))

/*
Fatorial de 5
-> 5! = 5 x 4 x 3 x 2 x 1 = 120

    - 5 é passado como parâmetro para n
    - fat recebe 1 pois o fatorial de qualquer número multiplicado por 1 é o próprio número, além de permite multiplicar por outros números sem afetar o resultado. Ou seja, permite que o parâmetro seja passado corretamente para o cálculo
    - Um laço de repetição é utilizado para definir o contador como o valor no parâmetro, de modo com que este loop começa com c igual a n e continua decrementando c enquanto c for maior que 1. Em cada iteração, o valor de c é multiplicado pelo valor atual de fat 
    - Como o contador sempre perde 1 através do c-- enquanto o contador for maior que 1, a lógica do fatorial - onde a multiplicação sempre vai diminuindo - está correta
    - A variável fat começa com 1 para que possamos multiplicá-la pelos números subsequentes corretamente. Se começássemos com 0, o resultado seria sempre 0, pois qualquer número multiplicado por 0 é 0
*/