// Módulo F - Exercícios de JavaScript (Parte 7 e 8)
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

/*
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores))
-> Só adiciona se for um número (o valor que está dentro de num é analisado para ver se é um número) e também só adiciona se não estiver inLista (uma análise para saber se o número digitado está na lista valores)
-> Só adiciona se ambos forem verdade, isto é, se o número for mesmo um número e se ele não (!) estiver na lista
-> valores.push -> adiciona um elemento ao vetor no último lugar

let item = document.createElement('option')
item.text = `Valor ${num.value} adicionado.`
lista.appendChild(item)
-> Criam os elementos do select

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) 
-> Verifica se o número é ou não um número
-> Só aceita valores entre 0 e 100

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) 
-> Recebe como parâmetros o número e a lista
-> Verifica se o número está na lista
-> Se na lista o número for diferente de -1, isto é, se o  valor não foi encontrado na lista, o retorno é verdadeiro
*/