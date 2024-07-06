console.log('while - Teste lógico no início')
var c = 1
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++
}

console.log('do while - Teste lógico no final')
var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)

/*
    Pós-incremento
    - contador++
    - contador = contador + 1
    - O incremento do contador é a soma de 1 ao valor dele mesmo
*/