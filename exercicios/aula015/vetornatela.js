// Módulo F - Aula 15 (Variáveis Compostas)
let valores = [8, 1, 7, 4, 2, 9]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('--- COLOCANDO EM ORDEM  ---')
valores.sort()

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}