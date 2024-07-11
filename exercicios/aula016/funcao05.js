// Módulo F - Aula 16 (Funções)
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*
Uma função recursiva acontece quando uma função chama ela mesma. 

---

O fatorial de um número pode ser calculado através do fatorial de outro. 

Exemplo - Fatorial de 5
-> 5! = 5 x 4 x 3 x 2 x 1 = 120
-> É a mesma coisa que: 5! = 5 x 4! (já que 4! é 4 x 3 x 2 x 1)

REGRA GERAL
-> n! = n x (n-1)!
-> O fatorial de um número é igual a esse número multiplicado pelo fatorial desse número menos 1
-> A exceção é o fatorial de 1, já que é ele mesmo: 1! = 1

---

Explicação do exercício
- É criada a função fatorial e dentro dela possui uma chamada para ela mesma
*/